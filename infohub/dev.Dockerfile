FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 
RUN yarn global add react-scripts

CMD npm rebuild node-sass && yarn start