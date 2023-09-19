FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Set the working directory to the src directory
WORKDIR /app/src

# for typescript
RUN npm run build
COPY .env ./dist/
WORKDIR /app/dist

EXPOSE 5000
CMD node index.js