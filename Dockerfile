#base image
FROM node:12-alpine as base
WORKDIR /app
COPY src/package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm set progress=false && npm config set depth 0
RUN npm install
RUN npm audit fix
RUN cp -R node_modules prod_node_modules

#dev
FROM dependencies AS dev
RUN npm install sqlite3 --save
COPY src/ .
EXPOSE 1337
CMD [ "npm", "run", "dev" ]

#production
FROM dependencies AS prod
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY src/ .
EXPOSE 1337
CMD [ "npm", "run", "start" ]