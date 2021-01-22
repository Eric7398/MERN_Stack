const routesCtl = require('../controller/rentals.controller')

module.exports = app => {
    app.get('/api/rentals', routesCtl.getAllRentals);
    app.post('/api/rentals', routesCtl.createRental);
    app.post('/api/rentals/:rentalId/likes', routesCtl.addLike);
    //req.params will look like this: { rentalId: 23434jdjasd}

    app.delete('/api/rentals/:id', routesCtl.deleteRental);

    app.get('/api/rentals/:id', routesCtl.getOneRental);

    app.put('/api/rentals/:id', routesCtl.updateRental);
}