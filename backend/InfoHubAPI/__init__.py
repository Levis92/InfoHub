from flask import Flask, jsonify
from .api import (
    get_vasttrafik_data,
    get_darksky_data,
    get_twitter_data,
    get_unsplash_wallpaper,
    get_vma_messages
)


app = Flask(__name__)


@app.route('/vasttrafik/<int:id>')
def vasttrafik(id=None):
    response = get_vasttrafik_data(id)

    status = 400\
    	if 'error' in response\
    	else 200

    return jsonify(response), status


@app.route('/darksky/<string:location>')
# location format: [latitude],[longitude]
def darksky(location=None):
    response, status = get_darksky_data(location)

    return jsonify(response), status


@app.route('/twitter/<string:user>')
def twitter(user=None):
    response = get_twitter_data(user)
    return jsonify(response), 200


@app.route('/unsplash/wallpaper')
def unsplash():
    return jsonify(get_unsplash_wallpaper())


@app.route('/vma')
def vma():
    return jsonify(get_vma_messages())
