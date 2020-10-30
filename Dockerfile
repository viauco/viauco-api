#base image
FROM node:12-alpine as base
WORKDIR /app
COPY src/package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install
RUN npm prune
COPY prune.sh .
COPY src/ .
RUN chmod +x ./prune.sh
RUN ./prune.sh

# --- app ----
FROM dependencies AS app
EXPOSE 1337

#dev
FROM app AS dev
CMD [ "npm", "run", "dev" ]

#production
FROM app AS prod
CMD [ "npm", "run", "start" ]