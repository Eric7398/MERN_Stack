const Joke = require("../models/jokes.models");

// Export a function to get all jokes
module.exports.getAll = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Export a function to get a single joke
module.exports.getOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Export a function to create a joke
module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(createJoke => res.json({ joke: createJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Export a function to update a joke
module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateJoke => res.json({ joke: updateJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Export a function to delete a joke
module.exports.delete = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => res.json({ joke: deleteJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
