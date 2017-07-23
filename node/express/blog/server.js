const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// {
//     title: '',
//     author: '',
//     body: ''
// }

const articles = [];

// CRUD create:post(), read:get(), update:put(), delete:delete()

app.get('/articles', (req, res) => {
    res.json(articles);
});

app.post('/articles', (req, res) => {
    articles.push(req.body);
    res.redirect('/articles');
});

app.get('/articles/:id', (req, res) => {

});


app.put('/articles/:id', (req, res) => {
    
});


app.delete('/articles/:id', (req, res) => {
    
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});
