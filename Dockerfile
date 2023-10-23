FROM node:16.19-alpine

RUN apk --no-cache add curl
RUN npm i -g npm

RUN mkdir /app
WORKDIR /app

COPY package*.json .
COPY npm* .

RUN npm i

COPY index.js index.js