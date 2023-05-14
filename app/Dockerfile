FROM node:18-alpine AS dev
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

CMD ["node"]

FROM node:18-alpine AS prod
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

COPY package*.json ./

RUN npm i

CMD ["sh", "-c", "npm run start"]