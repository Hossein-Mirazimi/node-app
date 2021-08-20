FROM node:14

RUN mkdir -p /usr/node-app
WORKDIR /usr/node-app/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]