const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes/route')(express);
app.use('/', router);

app.listen(3000, () => {
    console.log('Running on port 3000');
});
