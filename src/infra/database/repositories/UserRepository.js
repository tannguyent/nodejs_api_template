import User from '../models/User';

import MongooseRepository from './MongooseRepository';

class UserRepository extends MongooseRepository {
  constructor() {
      super({ Model: User });
  }
}

export default UserRepository;