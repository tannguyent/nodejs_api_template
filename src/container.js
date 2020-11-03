const { createContainer, asClass, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../config');

const Application = require('./app/Application');
const Server = require('./infra/webserver/Server');

const router = require('./interfaces/routes/routes');

const logger = require('./infra/logging/logger');
const loggerMiddleware = require('./infra/logging/loggerMiddleware');

const exceptionHandler = require('./infra/exceptions/exceptionHandler');
const devExeptionHandler = require('./infra/exceptions/devExeptionHandler');

const container = createContainer();

// System
container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton()
  })
  .register({
    config: asValue(config)
  });

// Middlewares
container
  .register({
    loggerMiddleware: asFunction(loggerMiddleware).singleton()
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    exeptionHandler: asValue(config.production ? exceptionHandler : devExeptionHandler)
  });

module.exports = container;