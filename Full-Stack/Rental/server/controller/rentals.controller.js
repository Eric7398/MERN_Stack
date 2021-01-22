const Rental = require('../model/rental.model')

// FIND ALL CRUD TO RENDER ALL RENTALS
module.exports.getAllRentals = (req, res) => {
    Rental.find() // this returns a promise 
        .then(allRentals => res.json(allRentals))
        .catch(err => res.json(err)); // incase there is an error
}

// CREATE CRUD
module.exports.createRental = (req, res) => {
    console.log('this is the request body', req.body);

    // our request should have a body if we did things correctly
    Rental.create(req.body) // this returns a promise
        .then(newProperty => res.json(newProperty))
        .catch(err => res.status(400).json(err))
}

// LIKE CRUD
module.exports.addLike = (req, res) => {
    // request.params is an object!
    console.log('request.params is this object!', req.params)
    Rental.findByIdAndUpdate(
        req.params.rentalId,
        {
            $inc: {
                likes: 1
            }
        },
        {
            new: true // asking for the updated document
        }
    ) // returns a promise!
        .then(updatedRental => res.json(updatedRental)) // send back to the client
        .catch(err => res.json(err))
}


// DELETE CRUD
module.exports.deleteRental = (req, res) => {
    // id comes from req.params
    Rental.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
}

// GET ONE RENTAL
module.exports.getOneRental = (req, res) => {
    Rental.findById(req.params.id)
        .then(retrieveRental => res.json(retrieveRental))
        .catch(err => console.log(err))
}


module.exports.updateRental = (req, res) => {
    Rental.findByIdAndUpdate(
        req.params.id,
        req.body, // this is the body of what was in the form to update
        {
            new: true,
            runValidators: true
        }
    )
        .then(updatedRental => res.json(updatedRental))
        .catch(err => res.status(400).json(err))
}