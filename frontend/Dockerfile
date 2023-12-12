FROM node:21

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

EXPOSE 4000
ENV PORT 4000

COPY . .