const { createContainer, asClass, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');

// config
const config = require('../config');

// app
const Application = require('./app/Application');
const Server = require('./infra/webserver/Server');

// route
const router = require('./interfaces/routes/routes');

// log
const logger = require('./infra/logging/logger');
const loggerMiddleware = require('./infra/logging/loggerMiddleware');

// exception
const exceptionHandler = require('./infra/exceptions/exceptionHandler');
const devExeptionHandler = require('./infra/exceptions/devExeptionHandler');

// entities
const { UserSchema } = require('./infra/database/models');

// repositories
const { UserRepository } = require('./infra/database/repositories');


// container
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


// model entity
container
  .register({
    userSchema: asValue(UserSchema)
  });

// repositories
container
  .register({
    userRepository: asClass(UserRepository).singleton()
  });

module.exports = container;