FROM node:16.13.1

WORKDIR /docker-workplace/test-client

COPY package.json ./

RUN npm install
RUN npm install -g serve

COPY . .

CMD ["npm", "run", "build"]

CMD ["serve", "-s", "build"]

EXPOSE 3000