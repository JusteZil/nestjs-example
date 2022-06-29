ARG NODEJS_VERSION=16.15.1 AS development
FROM node:$NODEJS_VERSION-slim as build

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile \
  && yarn cache clean

COPY . .

RUN yarn typecheck \
    && yarn lint \
    && yarn run build

CMD ["yarn", "start:prod"]