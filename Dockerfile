FROM node:21

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY . .
# Install node-modules
RUN npm install package-lock.json

EXPOSE 3000

CMD ["node", "index.js"]