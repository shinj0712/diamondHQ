FROM node:18.14.0-alpine3.17
LABEL maintener="sakamoto shinji"

# alpineコンテナにエイリアスを適用
ENV ENV="/etc/profile"
COPY .alias ./
RUN cat .alias > "$ENV"

RUN mkdir -p var/www/client
WORKDIR /var/www/client

COPY --chown=node:node /client/package.json /client/package-lock.json ./var/www/client/
RUN npm ci

COPY --chown=node:node ./client ./client