"""
Important messages to the public (Sweden)
https://sverigesradio.se/api/documentation/v2/metoder/vma.html

GET http://api.sr.se/api/v2/vma?format=json

{
    "copyright": "Copyright Sveriges Radio 2019. All rights reserved.",
    "messages": []
}

Varje meddelande innehåller:

id - Meddelandets id
title - Meddelandets rubrik
description - Beskrivande text för meddelandet
date - När meddelandet publicerades i UTC
url - Länk till relaterad nyhetsartikel
"""
import requests


def get_vma_messages():
    r = requests.get("http://api.sr.se/api/v2/vma?format=json")
    return r.json(), r.status_code
