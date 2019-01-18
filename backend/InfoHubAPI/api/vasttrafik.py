from datetime import datetime
import json
import requests
import base64
from operator import itemgetter
from .api_keys import API


def get_vasttrafik_data(id):
    authKey = get_access_token()
    date = datetime.now().strftime("%Y-%m-%d")
    time = datetime.now().strftime("%H:%M")
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
    requestURL = f"{host}{baseurl}/departureBoard"
    response = requests.get(requestURL, params=request, headers=headers)

    status = response.status_code
    data = response.json()
    error = {'error': 'Service is not available'}

    response = modify_data(data['DepartureBoard'])\
        if status == 200 and 'error' not in data['DepartureBoard']\
        else error
    return response


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


def modify_data(data):
    result = { 'Departure': [] }
    data['Departure'] = [ trim_departure_data(d) for d in data['Departure'] ]
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

    return result


def get_departure_keys(departures):
    keys = []
    for d in departures:
        keys.append(d['sname']+d['direction'])
    return set(keys)


def trim_departure_data(departure):
    del departure['JourneyDetailRef']
    del departure['journeyid']
    del departure['stopid']
    departure.setdefault('rtTime', departure['time'])
    departure.setdefault('rtDate', departure['date'])
    del departure['time']
    del departure['date']
    return departure


def add_next_departure(departure, next_departure):
    departure['nextRtTime'] = next_departure['rtTime']
    departure['nextRtDate'] = next_departure['rtDate']
    try:
        departure['nextAccessibility'] = next_departure['accessibility']
    except Exception as e:
        pass
