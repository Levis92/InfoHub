#!/usr/bin/env sh

# Activate virtual envriontment
. ./venv/bin/activate

# Flask entry point
export FLASK_APP=InfoHubAPI.__init__
# Flask debug mode, live code reload and debugger activated
export FLASK_DEBUG=1

# Run application allowing external requests
python3 -m flask run
