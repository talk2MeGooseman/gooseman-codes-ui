FROM node:13.5-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start:prod"]
