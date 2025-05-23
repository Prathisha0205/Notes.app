const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  color: { type: String, default: '#ffffff' },   // default white color
  category: { type: String, default: 'General' },
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
