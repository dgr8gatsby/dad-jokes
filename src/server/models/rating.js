const mongoose = require ('mongoose');
const Schema = mongoose.schema;

const RatingSchema = new Schema ({
  joke: {type: Schema.Types.ObjectId, ref: 'Joke', required: true},
  // enum 1= laughs, 2= groans, 3=silence
  rating: {type: Number, enum: [1, 2, 3]},
});

// Export the model
module.exports = mongoose.model ('Joke', RatingSchema);
