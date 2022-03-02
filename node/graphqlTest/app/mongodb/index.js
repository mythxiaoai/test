// mongodb/index.js
const mongoose = require('mongoose');
const config = {
    dbPath: 'mongodb://localhost:27017/test'
}

require('./schema/list')
module.exports = database = () => {
    mongoose.set('debug', true)
  
    mongoose.connect(config.dbPath)
  
    mongoose.connection.on('disconnected', () => {
      mongoose.connect(config.dbPath)
    })
    mongoose.connection.on('error', err => {
      console.error(err)
    })
  
    mongoose.connection.on('open', async () => {
      console.log('Connected to MongoDB ', config.dbPath)
    })

    return mongoose.connection;
  }

// module.exports = {
//     database
// }

// database()