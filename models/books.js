
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  }
});

// title: 'abc',
// isbn:'abcd',
// author:''har,
// description:'ali',
// published_date:'2021-11-11',
// publisher:'join'

module.exports = Book = mongoose.model('book', BookSchema);