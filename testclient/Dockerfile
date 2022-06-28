FROM node:16.13.1

WORKDIR /docker-workplace/test-client

COPY package.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000