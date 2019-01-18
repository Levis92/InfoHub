import json
import requests
from .api_keys import API


def get_darksky_data(location):
    auth_key = API['darkSky']['secret']
    host = 'https://api.darksky.net'
    base_url = '/forecast/'
    request = {
        'lang': 'sv',
        'units': 'si',
        'exclude': ['flags'],
    }
    request_url = f"{host}{base_url}{auth_key}/{location}"
    response = requests.get(request_url, params=request)
    return response.json(), response.status_code
