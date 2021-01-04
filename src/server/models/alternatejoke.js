const mongoose = require ('mongoose');
const Schema = mongoose.schema;

const AlternateJokeSchema = new Schema ({
  joke: {type: Schema.Types.ObjectId, ref: 'Joke', required: true},
  headline: {type: String, required: true},
  punchline: {type: String, required: false},
  type: {type: String, enum: ['qa', 'ol'], required},
});

// Virtual for joke URLs
AlternateJokeSchema.virtual ('url').get (() => {
  return `joke/${this._id}`;
});

// Export the model
module.exports = mongoose.model ('Joke', AlternateJokeSchema);
