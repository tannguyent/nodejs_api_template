class Application {
  constructor({ server, logger, manageDB }) {
    this.server = server;
    this.logger = logger;
    this.manageDB = manageDB;
  }

  async start() {

    if(this.manageDB) {
      await this.manageDB.connect();
    }

    await this.server.start();
  }
}

module.exports = Application;
  