from flask import Flask, Response
from .vasttrafik import get_vasttrafik_json
from .darksky import getDarkSkyJSON
from .twitter import getTwitterJSON
app = Flask(__name__)


@app.route('/vasttrafik/<id>')
def vasttrafik(id=None):
    resp = Response(get_vasttrafik_json(id))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/darksky/<location>')
# location format: [latitude],[longitude]
def darksky(location=None):
    resp = Response(getDarkSkyJSON(location))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/twitter/<user>')
def twitter(user=None):
    resp = Response(getTwitterJSON(user))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
