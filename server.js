const express = require('express');
const path = require('path');

const PORT = 8000;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const session = require('express-session');
app.use(session({ secret: 'secret secret secret',
                  resave: false,
                  saveUninitialized: true } ));

app.use(express.static(path.join(__dirname, '/client/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
