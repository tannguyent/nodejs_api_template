class CreateUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec (user) {
    return await this.userRepository.create(user);
  }
}

module.exports = CreateUser;