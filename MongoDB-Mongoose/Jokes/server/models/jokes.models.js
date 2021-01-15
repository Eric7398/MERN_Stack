const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required for a joke!"],
        minlength: [2, "Come on... at least type something longer than 2 characters"]

    },
    punchline: {
        type: String,
        required: [true, "Where's the punchline at?"],
        minlength: [1, "Gonna need a longer punchline than that"]
    }
});

const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;
