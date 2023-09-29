const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  shipIsBroken: {
    type: Boolean,
    default: true, // Default value set to true
  },
}, {
  timestamps: true, // Enable timestamps for created_at and updated_at
});

module.exports = mongoose.model('Log', logsSchema);