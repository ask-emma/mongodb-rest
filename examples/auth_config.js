module.exports = {
  db: {
    port: 27017,
    host: 'localhost',
  },
  server: {
    port: 3000,
    address: '0.0.0.0',
  },
  accessControl: {
    allowOrigin: '*',
    allowMethods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
    allowCredentials: false,
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
    auth_db: 'api_auth',
    usersCollection: 'auth_users',
    tokensCollectionName: 'auth_tokens',
    universalAuthToken: 'this-token-grants-universal-access-so-please-change-it',
    tokenExpirationTimeHours: 8,
  },
}
