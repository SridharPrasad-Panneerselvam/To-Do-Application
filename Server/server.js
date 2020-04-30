let express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.connect("mongodb+srv://admin:admin@cluster0-bsghy.mongodb.net/todo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//Enabling CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Initialize app
let initApp = require("./api/app");
initApp(app);

app.listen(port);
console.log("ToDo RESTful API server started on: " + port);
