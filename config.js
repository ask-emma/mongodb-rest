module.exports = {
  db: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
  server: {
    port: process.env.PORT || 3000,
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
  urlPrefix: '',
  auth: {
    authDB: process.env.AUTH_DB || 'mongo_auth',
    usersCollection: 'auth_users',
    tokensCollectionName: 'auth_tokens',
    tokenExpirationTimeHours: 8,
  },
}
