class UpdateUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec (user) {
    return this.userRepository.update(user);
  }
}

module.exports = UpdateUser;