module.exports = {
  development: {
    username: process.env.DB_USER || 'thadycondon',
    password: process.env.DB_PASSWORD || 'ReallyStrongPassword123',
    database: process.env.DB_SCHEMA || 'emma',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER || 'thadycondon',
    password: process.env.DB_PASSWORD || 'ReallyStrongPassword123',
    database: process.env.DB_SCHEMA || 'emma',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
};
