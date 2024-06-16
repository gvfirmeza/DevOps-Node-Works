const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/banco-loginit';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Pattern GOF Singleton
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Database connected');
});

module.exports = db;