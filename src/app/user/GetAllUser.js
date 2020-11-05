class GetAllUser {
  constructor ( userRepository) {
    this.userRepository = userRepository;
  }

  async exec () {
    return this.userRepository.find();
  }
}

module.exports = GetAllUser;