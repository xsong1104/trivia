const path = require('path');
const users = require('../controllers/user_controller.js');
const trivia = require('../controllers/trivia_controller.js');

module.exports = (app) => {
    app.get('/logout', users.logout);
    app.get('/getUser', users.getUser);
    app.get('/getScore', users.getScore);
    app.get('/allScores', users.allScores);
    app.post('/login', users.login);
    app.post('/saveScore', users.save);

    app.get('/startGame', trivia.start);
    app.post('/addQuestion', trivia.add);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    })
}
