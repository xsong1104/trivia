const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
    question: {type: String},
    options: {type: Array}
})

mongoose.model('Trivia', TriviaSchema);
