FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./package*.json .

COPY ./bun.lock .

COPY ./turbo.json .

RUN bun i

COPY ./packages ./packages

COPY ./apps/websockets ./apps/websockets

RUN bun run generate:db

EXPOSE 8081

CMD [ "bun", "start:ws" ]