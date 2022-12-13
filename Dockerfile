# build
FROM node:alpine

WORKDIR /srv

ADD . /srv

RUN npm ci && \
    npm run build && \
    rm -rf /srv/src && \
    ls -al /srv

# deploy
FROM node:alpine

ARG _server_port=1234
ARG _user_name=user
ARG _user_pass=pass
ENV SERVER_PORT $_server_port
ENV USER_NAME $_user_name
ENV USER_PASS $_user_pass

WORKDIR /srv
COPY --from=0 /srv ./

EXPOSE ${SERVER_PORT}
ENTRYPOINT [ "npm", "start" ]