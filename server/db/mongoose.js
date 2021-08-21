const mongoose = require('mongoose');
// const config = require('config');
const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://root:icpcPbKtpp2CyPNi@z3f9a335d-mongodb.qovery.io/PA_DB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

module.exports = {
  mongoose,
};
