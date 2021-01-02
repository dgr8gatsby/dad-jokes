const mongoose = require ('mongoose');
const Schema = mongoose.schema;

const JokeSchema = new mongoose.Schema ({
  headline: {type: String, required: true},
  punchline: {type: String, required: false},
  type: {type: String, enum: ['question', 'oneliner'], required: true},
  why: {type: String, required: false},
});

// Virtual for joke URLs
JokeSchema.virtual ('url').get (() => {
  return `joke/${this._id}`;
});

// Export the model
module.exports = new mongoose.model ('Joke', JokeSchema);
