const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/foo/:foobar', (req, res) => {
    res.send(`foo/${req.params.foobar}`);
});

app.get('/foo', (req, res) => {
    res.send('Hello, Node Server! foo!!');
});

app.get('/bar', (req, res) => {
    res.send('Hello, Node Server! bar!!');
});

app.all('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});
