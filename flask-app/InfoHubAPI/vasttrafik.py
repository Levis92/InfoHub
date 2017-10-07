import datetime
import json
import requests
import base64
from operator import itemgetter
from .api_keys import API


def get_vasttrafik_json(id):
    authKey = get_access_token()
    date = '20' + str(datetime.datetime.now().strftime("%y-%m-%d"))
    time = str(datetime.datetime.now().strftime("%H:%M"))
    host = 'https://api.vasttrafik.se'
    baseurl = '/bin/rest.exe/v2'
    headers = {
        'Authorization': 'Bearer ' + authKey
    }
    request = {
        'id': id,
        'date': date,
        'time': time,
        'format': 'json',
    }
    requestURL = host + baseurl + '/departureBoard'
    r = requests.get(requestURL, params=request, headers=headers)
    r = r.json()
    return modify_json(r)


def get_access_token():
    url = 'https://api.vasttrafik.se/token' # Set destination URL here
    key = API['vasttrafik']['key']
    secret = API['vasttrafik']['secret']
    encoded = base64.b64encode((key + ":" + secret).encode()).decode()
    post_fields = {
        'grant_type': 'client_credentials',
        'scope': '1'
    }
    headers = {
        'Authorization': 'Basic ' + encoded,
        'Content-Type': 'application/x-www-form-urlencoded',
    }     # Set POST fields here
    r = requests.post(url, data=post_fields, headers=headers).json()
    r = json.dumps(r)
    access_token = json.loads(r)['access_token']
    return access_token


def modify_json(data):
    result = { 'Departure': [] }
    data['Departure'] = data['DepartureBoard']['Departure']
    del data['DepartureBoard']
    data['Departure'] = [trim_departure_data(d) for d in data['Departure']]
    key_list = get_departure_keys(data['Departure'])
    departures = {}

    for stop_id in key_list:
        departure_list = [
            d for d in data['Departure'] if d['sname']+d['direction'] == stop_id
        ]
        departures[stop_id] = departure_list[0]

        if len(departure_list) > 1:
            add_next_departure(departures[stop_id], departure_list[1])

        result['Departure'].append(departures[stop_id])

    result['Departure'] = sorted(
        result['Departure'], key=itemgetter('rtDate', 'rtTime'))
    return json.dumps(result)


def get_departure_keys(departures):
    keys = []
    for d in departures:
        keys.append(d['sname']+d['direction'])
    return set(keys)


def trim_departure_data(departure):
    del departure['JourneyDetailRef']
    del departure['journeyid']
    del departure['stopid']
    del departure['time']
    del departure['date']
    return departure


def add_next_departure(departure, next_departure):
    try:
        departure['nextRtTime'] = next_departure['rtTime']
    except Exception as e:
        departure['nextRtTime'] = next_departure['time']
    try:
        departure['nextRtDate'] = next_departure['rtDate']
    except Exception as e:
        departure['nextRtDate'] = next_departure['date']
    try:
        departure['nextAccessibility'] = next_departure['accessibility']
    except Exception as e:
        pass
