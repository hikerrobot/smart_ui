FROM node:latest

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]

COPY ./public/ ./public/
COPY ./src/ ./src/

RUN npm i && npm install -g serve && \
  npm run build

EXPOSE 5000

CMD ["serve", "-s build"]

