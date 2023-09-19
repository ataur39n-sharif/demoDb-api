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
ENV frontend_success_url="http://localhost:3000/"
ENV frontend_fail_url="http://localhost:3000/"
ENV username="sandboxTestUser"
ENV password="hWD@8vtzw0"
ENV app_key="5tunt4masn6pv2hnvte1sb5n3j"
ENV app_secret="1vggbqd4hqk9g96o9rrrp2jftvek578v7d2bnerim12a87dbrrka"
ENV backend_callback_url="http://localhost:5000/api/bkash/callback"


WORKDIR /app/dist

EXPOSE 5000
CMD node index.js