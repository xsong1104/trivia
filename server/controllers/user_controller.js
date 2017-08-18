const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    login: (req, res, next) => {
        req.session.username = req.body.username;
        res.json(true);
    },
    getUser: (req, res, next) => {
        if (req.session.username) {
            let user = {username: req.session.username};
            res.json(user);
        }
        else {
            res.status(400).json(false);
        }
    },

    getScore: function(req, res, next){
        console.log(req.body._id)
        User.findOne({_id:req.body._id})
            .then((userscore) => { res.json(userscore); })
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.redirect('/');
    },
    save: (req, res, next) => {
        let u = new User(req.body);
        u.save()
        .then(() => {res.json(true); })
        .catch((err) => { res.status(500).json(err); });
    },
    allScores: (req, res, next) => {
        User.find().sort({score: -1})
        .then((users) => { res.json(users); })
        .catch((err) => { res.status(500).json(err); });
    }
}
