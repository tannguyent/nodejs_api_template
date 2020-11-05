class CreateUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec (user) {
    return this.userRepository.create(user);
  }
}

module.exports = CreateUser;