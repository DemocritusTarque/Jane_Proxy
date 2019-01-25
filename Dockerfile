FROM node:10.14.0

# Create app dir
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# RUN npm run build
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
