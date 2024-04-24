FROM node:latest

WORKDIR /app/node

COPY package*.json ./

RUN npm install -g npm@10.2.4

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
