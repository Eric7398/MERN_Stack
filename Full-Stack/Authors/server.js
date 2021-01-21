const express = require('express'); // import Express library
const cors = require('cors'); // CORS allows us to access external urls (ex: accessing REACT at localhost:3000)
const app = express();

require("./server/config/mongoose.config"); // has to be above the 'require routes'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //(MAYBE) allows us to access our API from front end to back using URLS - Eric

require("./server/routes/author.routes")(app);

app.listen(8000, () => {
    console.log("You are now listening on port 8000");
})