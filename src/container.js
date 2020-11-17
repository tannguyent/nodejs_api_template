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

// middleware
const { notFoundMiddleware } = require('./infra/middlewares');

// entities
const { User: UserModel } = require('./infra/database/models');

// repositories
const { UserRepository } = require('./infra/database/repositories');

// database 
const ManageDB = require('./infra/database');

// container
const container = createContainer();

// serializers
const { UserSerializer } = require('./interfaces/serializers');


// swagger 
const swaggerMiddleware = require('./infra/swagger/swaggerMiddleware');

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
    exeptionHandler: asValue(config.production ? exceptionHandler : devExeptionHandler),
    notFoundMiddleware: asValue(notFoundMiddleware),
    swaggerMiddleware: asValue([swaggerMiddleware])
  });

// database
container
  .register({
    manageDB: asClass(ManageDB),
    UserModel: asValue(UserModel)
  });

// repositories
container
  .register({
    userRepository: asClass(UserRepository).singleton()
  });

// serializers
container
  .register({
    userSerializer: asValue(UserSerializer)
  });

module.exports = container;