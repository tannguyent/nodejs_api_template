class Application {
  constructor({ server, logger, database }) {
    this.server = server;
    this.logger = logger;
    this.database = database;
  }

  async start() {

    if(this.database) {
      await this.database.connect();
    }

    await this.server.start();
  }
}

module.exports = Application;
  