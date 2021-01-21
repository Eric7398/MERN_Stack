const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {
    // ----- TO CHECK IF THE BACKEND API IS WORKING ----- //
    app.get("/", AuthorController.index);
    // ----- API ROUTE TO CREATE NEW AUTHOR ----- //
    app.post('/api/new', AuthorController.createAuthor);
    // ----- API ROUTE TO SHOW ALL AUTHORS ----- //
    app.get('/api/authors', AuthorController.getAllAuthors);
    // ----- API ROUTE TO UPDATE AUTHOR BY ID ----- //
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    // ----- API ROUTE TO DELETE AUTHOR BY ID ----- //
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}