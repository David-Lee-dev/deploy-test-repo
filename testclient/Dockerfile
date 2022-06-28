FROM node:16.13.1

WORKDIR /docker-workplace/test-client

COPY package.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 3000