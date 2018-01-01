# Version: 1.0.0
FROM node:alpine

# Set working directory to /usr/src
WORKDIR /usr/src/globomantics-webstore

# Copy the needed files locally into the container
COPY . .

# Install yarn, install modules in main and in api,
#  build the webapp for production, clear cache
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    cd api && yarn && cd .. \
    yarn build && \
    yarn cache clean

# Specify that our app will be using port 8080
EXPOSE 8080
