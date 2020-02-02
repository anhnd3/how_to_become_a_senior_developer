FROM node:10.16.3

# Create app directory
RUN mkdir -p /usr/src/smart-brain-api
WORKDIR /usr/src/smart-brain-api

# Install app dependencies
COPY package.json /usr/src/smart-brain-api
RUN npm install

# Bundle app source
COPY . /usr/src/smart-brain-api

# Build arguments
ARG NODE_VERSION=8.11.1

# Environment
ENV NODE_VERSION $NODE_VERSION

# FROM node:10.16.3

# WORKDIR /usr/src/smart-brain-api

# COPY ./ ./

# RUN npm install

# CMD [ "/bin/bash" ]