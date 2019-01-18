import requests
import json
from .api_keys import API

def get_unsplash_wallpaper():
    host = 'https://api.unsplash.com'
    base_url = '/photos/random'
    params = {
        'client_id': API['unsplash']['key'],
        'query': 'nature wallpaper',
        'count': 15
    }
    r = requests.get(f"{host}{base_url}", params=params)
    r.raise_for_status()
    return r.json()
