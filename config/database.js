module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        /*client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        */
        'client': env('DATABASE_CLIENT','postgres'),
        'database': env('DATABASE_NAME','db_name'),
        'host': env('DATABASE_HOST','127.0.0.1'),
        'port': env.int('DATABASE_PORT',5432),
        'username': env('DATABASE_USERNAME','postgres'),
        'password': env('DATABASE_PASSWORD','password'),
        'schema': env('DATABASE_SCHEMA', 'public')
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
