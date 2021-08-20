const mongoose = require('mongoose');
// const config = require('config');
const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.createConnection(`mongodb://${uri}`, {
  user: 'root',
  pass: 'icpcPbKtpp2CyPNi',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

module.exports = {
  mongoose,
};
