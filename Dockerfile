FROM node:12.7-alpine

RUN npm set progress=false
RUN apk add --no-cache git
RUN apk add --no-cache bash

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --no-package-lock

ADD . /usr/src/app
