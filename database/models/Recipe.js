const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReceipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String
  }
});
module.exports = mongoose.model('Recipe', ReceipeSchema);
