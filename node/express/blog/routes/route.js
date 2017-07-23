const articles = [];

module.exports = (express) => {

    const router = express.Router();

    // CRUD create:post(), read:get(), update:put(), delete:delete()

    router.get('/articles', (req, res) => {
        res.json(articles);
    });

    router.post('/articles', (req, res) => {
        articles.push(req.body);
        res.redirect('/articles');
    });

    router.get('/articles/:id', (req, res) => {

    });

    router.put('/articles/:id', (req, res) => {
        
    });


    router.delete('/articles/:id', (req, res) => {
        
    });

    return router;
}