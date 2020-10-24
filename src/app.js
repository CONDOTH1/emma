const express = require('express');
const OpenApiValidator = require('express-openapi-validator');

const config = require('./config');
const usersRouter = require('./routers/users');
const healthCheckRouter = require('./routers/healthcheck');
const gracefulShutdown = require('./utils/gracefulShutdown');

const app = express();

app.use(
  OpenApiValidator.middleware({
    apiSpec: `${__dirname}/../definitions/emma.yaml`,
    validateRequests: true,
  }),
);

app.use(`/${config.name}`, usersRouter);
app.use(`/${config.name}/healthcheck`, healthCheckRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
  next();
});

const server = app.listen(config.port);

gracefulShutdown(server);

module.exports = server;
