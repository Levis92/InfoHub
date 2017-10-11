from bs4 import BeautifulSoup
import json
import requests


def get_twitter_json(user):
    data = {'images': []}
    data['images'] = get_posts(user)
    return json.dumps(data)


def get_posts(user):
    posts = []
    r = requests.get(f"https://twitter.com/{user}")
    r.raise_for_status()
    noStarchSoup = BeautifulSoup(r.text, "html.parser")
    elems = noStarchSoup.select('div.AdaptiveMedia-photoContainer.js-adaptive-photo > img')
    for elem in elems:
        posts.append(elem.attrs['src'])
    return posts
