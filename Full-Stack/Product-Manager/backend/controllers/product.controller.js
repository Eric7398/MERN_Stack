const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Server Testing",
    });
};

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description,
    })
        .then((product) => res.json(product))
        .catch((err) => res.json(err));
};

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then((products) => res.json(products))
        .catch((err) => res.json(err));
};

module.exports.oneProduct = (req, res) => {
    Product.find({ _id: req.params.id })
        .then((product) => res.json(product))
        .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
    })
        .then((updatedProduct) => req.json(updatedProduct))
        .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => res.json(deleteConfirmation))
        .catch((err) => res.json(err));
};