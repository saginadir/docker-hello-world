FROM node:alpine

COPY ./ src/

WORKDIR src

RUN npm install

EXPOSE 80

CMD node index.js
