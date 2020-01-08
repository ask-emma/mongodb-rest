module.exports = {
  db: {
    port: process.env.MONGO_PORT || 27017,
    host: process.env.MONGO_HOST || 'localhost',
    authSource: process.env.MONGO_AUTH_SOURCE,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
  },
  server: {
    port: process.env.PORT || 3010,
    address: 'localhost',
  },
  accessControl: {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
    credentials: false,
  },
  mongoOptions: {
    serverOptions: {},
    dbOptions: {
      w: 1,
    },
  },
  humanReadableOutput: true,
  collectionOutputType: 'json',
  urlPrefix: '/api',
}
