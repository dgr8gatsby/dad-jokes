const process = require('process');
const mongoose = require('mongoose');

const config = {
  URL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  DB_NAME: process.env.MONGO_DB_NAME || 'dadjokes',
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

const jokeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['question'],
    required: [true, 'Type is required']
  },
  headline: {
    type: String,
    required: [true, 'Headline is required']
  },
  punchline: {
    type: String,
    required: [true, 'Punchline is required']
  }
});

const models = {
  joke: new mongoose.model('jokes', jokeSchema)
};


module.exports = {
  config: config,
  models: models
};
