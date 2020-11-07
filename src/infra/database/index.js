const mongoose = require('mongoose')

class ManageDB {
  constructor ({ config, logger }) {
    const { db } = config;

    this.config = config;
    this.connection = db
    this.logger = logger
  }

  async connect () {
    const options = this.config.ENV === 'prod'
      ? { autoIndex: false }
      : {}

    this.logger.debug('Connecting to the database...')

    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false)
    
    await mongoose
      .connect(this.connection, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ...options 
      })
      .catch(error => {
        this.logger.error('Error while connecting to the database', error)
        process.exit(1)
      })

    this.logger.debug('Connected to the database')
  }

  async close () {
    this.logger.debug('Closing database...')

    await mongoose.connection.close().catch(error => {
      this.logger.error('Error while closing the database', error)
      process.exit(1)
    })

    this.logger.debug('Database closed')
  }
}

module.exports = ManageDB