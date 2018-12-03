FROM node:8.9-alpine
# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "yarn.lock", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 3200
CMD npm start