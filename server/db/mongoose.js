const mongoose = require('mongoose');
// const config = require('config');
const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
//root:JuBbV9RiZ0bR5DoZ
mongoose.connect(`mongodb://z3afaf0a1-mongodb.qovery.io/PA_DB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
}, err => {
  if(err) {
    console.log("Error: ",err);
    console.log('____________________________________________________');
    process.exit(1)
  }
});

module.exports = {
  mongoose,
};
