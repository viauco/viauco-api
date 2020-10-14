const sqlite = {
  connector: 'bookshelf',
  settings: {
    client: 'sqlite',
    filename: '.tmp/data.db',
  },
  options: {
    // debug: true,
    useNullAsDefault: true,
  },
};

const postgres = {
  connector: 'bookshelf',
  settings: {
    client: 'postgres',
    database: process.env.DATABASE_NAME || 'strapi',
    username: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
  },
  options: {},
};

const mysql = {
  connector: 'bookshelf',
  settings: {
    client: 'mysql',
    database: process.env.DATABASE_NAME ||'strapi',
    username: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: process.env.DATABASE_PORT || 3306,
    host: process.env.DATABASE_HOST || 'localhost',
  },
  options: {},
};

const mongo = {
  connector: 'mongoose',
  settings: {
    database: process.env.DATABASE_NAME || 'strapi',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: process.env.DATABASE_PORT || 27017,
    host: process.env.DATABASE_HOST || 'localhost',
  },
  options: {},
};

const db = {
  mysql,
  sqlite,
  postgres,
  mongo,
};

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
  },
};
