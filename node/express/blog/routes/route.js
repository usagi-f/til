let articles = [];

module.exports = (express) => {

    const router = express.Router();

    // CRUD create:post(), read:get(), update:put(), delete:delete()

    router.route('/articles')
        .get((req, res) => {
            res.json(articles);
        })
        .post((req, res) => {
            articles.push(req.body);
            res.redirect('/articles');
        });

    router.route('/articles/:id')
        .get((req, res) => {

        })
        .put((req, res) => {
            
        })
        .delete((req, res) => {
            
        });

    router.get('/new', (req, res) => {
        res.send(`
<form method="post" action="/articles">
    <input type="text" placeholder="title" name="title">
    <input type="text" placeholder="author" name="author">
    <textarea placeholder="body" name="body"></textarea>
    <button type="submit">Submit</button>
</form>
        `)
    });

    return router;
}