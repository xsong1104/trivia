const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String},
    score: {type: Number},
    percentage: {type: Number}
})

mongoose.model('User', UserSchema);
