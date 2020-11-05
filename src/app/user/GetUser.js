class GetUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec (userId) {
    return this.userRepository.find({id: userId}, {multiple = false});
  }
}

module.exports = GetUser;