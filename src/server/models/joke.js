const mongoose = require ('mongoose');
const Schema = mongoose.schema;

const JokeSchema = new Schema ({
  headline: {type: String, required: true},
  punchline: {type: String, required: false},
  type: {type: String, enum: ['qa', 'ol'], required},
  why: {type: String, required: false},
});

// Virtual for joke URLs
JokeSchema.virtual ('url').get (() => {
  return `joke/${this._id}`;
});

// Export the model
module.exports = mongoose.model ('Joke', JokeSchema);
