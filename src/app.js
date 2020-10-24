const express = require('express');
const config = require('./config');
const usersRouter = require('./routers/users');
const healthCheckRouter = require('./routers/healthcheck');

const app = express();

app.use(`/${config.name}`, usersRouter);
app.use(`/${config.name}/healthcheck`, healthCheckRouter);

const server = app.listen(config.port);

module.exports = server;
