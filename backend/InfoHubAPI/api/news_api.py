import requests
from .api_keys import API


def get_news_articles():
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'country': 'se',
    }
    headers = {
        'X-Api-Key': API['newsAPI']['key'],
    }
    r = requests.get(url, headers=headers, params=params)
    return r.json(), r.status_code
