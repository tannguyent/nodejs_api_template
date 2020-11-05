class DeleteUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec (userId) {
    return this.userRepository.remove(userId);
  }
}

module.exports = DeleteUser;