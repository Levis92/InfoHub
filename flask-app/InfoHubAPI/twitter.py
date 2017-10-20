from bs4 import BeautifulSoup
import json
import requests


def get_twitter_data(user):
    data = {'images': []}
    data['images'] = get_posts(user)
    return data


def get_posts(user):
    r = requests.get(f"https://twitter.com/{user}")
    r.raise_for_status()
    parser = BeautifulSoup(r.text, "html.parser")
    elems = parser.select('div.AdaptiveMedia-photoContainer.js-adaptive-photo > img')
    posts = [ elem.attrs['src'] for elem in elems ]
    return posts
