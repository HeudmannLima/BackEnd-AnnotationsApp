const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://usuario:usuario2020@cluster0.i34xh.gcp.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
