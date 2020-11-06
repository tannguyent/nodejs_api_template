const MongooseRepository = require('./MongooseRepository');

class UserRepository extends MongooseRepository {
  constructor() {
      super({ UserModel });
  }
}

module.exports = UserRepository;