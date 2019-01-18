FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 
COPY ./ ./

CMD yarn start