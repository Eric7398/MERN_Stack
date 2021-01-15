const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    // Django would be --> path('/api/jokes', views.allJokes)
    app.get("/api/jokes/", JokeController.getAll);
    app.get("/api/jokes/:id", JokeController.getOne);
    app.post("/api/jokes/new", JokeController.create);
    app.put("/api/jokes/update/:id", JokeController.update);
    app.delete("/api/jokes/delete/:id", JokeController.delete);
};