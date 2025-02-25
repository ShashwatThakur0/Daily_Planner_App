const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({

  toDo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('ToDo', toDoSchema);