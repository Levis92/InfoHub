FROM node:11
WORKDIR /app
COPY package.json yarn.lock src/
RUN yarn
COPY . /app
CMD npm rebuild node-sass && yarn start
EXPOSE 3000