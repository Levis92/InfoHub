FROM python:3-slim-stretch

WORKDIR /usr/src/app

COPY . .

ENV TZ=Europe/Stockholm

RUN pip install --user --upgrade .

ENV FLASK_DEBUG=1

ENV FLASK_APP=InfoHubAPI.__init__

EXPOSE 5000

CMD python3 -m flask run --host=0.0.0.0