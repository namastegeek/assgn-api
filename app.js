//Project 3 for COMP2150
//installed express for web server, body-parser for parsing JSON strings, mongoose for data modeling
//set up connection to MongoDB
//use body-parser to handle requests sent


let express = require('express')
let app = express();
const apiRouter = require("./assgn-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

// set up mongoose and body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// connect to mongoose
mongoose.connect("mongodb://localhost/assgn", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully");
}

var port = 8080;

app.use("/api", apiRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running assgn-api on port " + port);
});