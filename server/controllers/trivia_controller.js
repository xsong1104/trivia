const mongoose = require('mongoose');
const Trivia = mongoose.model('Trivia');

mongoose.Promise = global.Promise;

module.exports = {
    add: (req, res, next) => {
        let q = new Trivia(req.body);
        q.save()
        .then(() => { res.json(true); })
        .catch((err) => { res.status(500).json(err); });
    },
    start: (req, res, next) => {
        Trivia.find()
        .then((questions) => {
            let three = [];
            while (three.length < 3) {
                let i = Math.floor(Math.random()*questions.length);
                if (!three.includes(i)) {
                    three.push(i);
                }
            }
            let threeQuestions = {questions: [questions[three[0]], questions[three[1]], questions[three[2]]]};
            res.json(threeQuestions);
        })
        .catch((err) => { res.status(500).json(err); });
    }
}
