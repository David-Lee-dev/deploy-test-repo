FROM python:3.8.10

WORKDIR /docker-workplace/test-server

COPY package.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000