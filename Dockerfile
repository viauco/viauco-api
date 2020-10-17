#base image
FROM node:12-alpine as base
WORKDIR /app
COPY src/package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install
RUN npm audit fix

#dev
FROM dependencies AS dev
RUN npm install sqlite3 --save
COPY src/ .
EXPOSE 1337
CMD [ "npm", "run", "dev" ]