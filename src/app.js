const express = require('express');
const config = require('./config');
const logger = require('./utils/logger');
const usersRouter = require('./routers/users');

const app = express();

app.use(`/${config.name}`, usersRouter);

// app.use(middlewares.defaultErrorHandler());

app.listen(config.port, () => {
  logger('%s', `Example app listening at http://localhost:${config.port}`);
});
