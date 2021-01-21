// CRUD for author model
const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({ message: "Hello, this is working!" })
}
// create a new author
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

// retrieving all authors in the database
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err));
}

// retrieving ONE author
module.exports.oneAuthor = (request, response) => {
    // Author.findById({ request.params.id }) << findById
    Author.findOne({ _id: request.params.id }) // << findOne
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// update an author
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedAuthor => request.json(updatedAuthor))
        .catch(err => response.json(err));
}

// delete an author
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err => response.json(err));
}