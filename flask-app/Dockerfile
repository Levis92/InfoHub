FROM python:3-slim-stretch

WORKDIR /app

COPY . .
RUN pip install --no-cache-dir .

ENV FLASK_DEBUG=1

CMD [ "./debug.sh", "--no-venv" ]
EXPOSE 5000