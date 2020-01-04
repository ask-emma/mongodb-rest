module.exports = {
  db: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
  server: {
    port: process.env.PORT || 3010,
    address: '0.0.0.0',
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
    usersDBConnection: process.env.MONGODB_COLLECTION,
    usersCollection: 'auth_users',
    tokenDBConnection: process.env.MONGODB_COLLECTION,
    tokensCollectionName: 'auth_tokens',
    tokenExpirationTimeHours: 8,
  },
}
