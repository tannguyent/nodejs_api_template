const MongooseRepository = require('./MongooseRepository');

class UserRepository extends MongooseRepository {
  constructor() {
      super({ Model: userSchema });
  }
}

module.exports = UserRepository;