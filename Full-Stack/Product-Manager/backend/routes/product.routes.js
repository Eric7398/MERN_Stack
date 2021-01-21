const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
    app.get("/api", ProductController.index);
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
};