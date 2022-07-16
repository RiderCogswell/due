const mongoose = require('mongoose');

// connect mongoose to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/due', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;