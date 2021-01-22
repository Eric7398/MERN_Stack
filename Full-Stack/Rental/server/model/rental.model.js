const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    address: {
        type: String,
        minlength: [5, 'The address must be at least 5 characters.'],
        required: [true, 'Address is required!']
    },
    imageUrl: {
        type: String,
        minlength: [5, 'The imgurl must be at least 5 characters.'],
        required: [true, 'Image is required!']
    },
    newConstruction: {
        type: Boolean,
        default: false
    },
    propertyType: {
        type: String,
        required: [true, 'Property type is required']
    },
    likes: {
        type: Number,
        default: 0
    },

}, { timestamps: true })

const Rental = mongoose.model('Rental', RentalSchema)
// collection will be rentals

module.exports = Rental;
// similar to export default Rental