const cc = require('config-check');

module.exports = {
  development: {
    username: cc('DB_USER').required().exec(),
    password: cc('DB_PASSWORD').required().exec(),
    database: cc('DB_SCHEMA').required().exec(),
    host: cc('DB_HOST').required().exec(),
    port: cc('DB_PORT').required().exec(),
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: cc('DB_USER').required().exec(),
    password: cc('DB_PASSWORD').required().exec(),
    database: cc('DB_SCHEMA').required().exec(),
    host: cc('DB_HOST').required().exec(),
    port: cc('DB_PORT').required().exec(),
    dialect: 'postgres',
    logging: false,
  },
};
