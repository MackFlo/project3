// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('mongoose');


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

// Use apiRoutes
app.use("/api", apiRoutes);

// MongoDB configuration 
mongoose.connect("mongodb://localhost:27017/homerun");
const db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Connected to Mongo DB..");
})

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
    if ( process.env.NODE_ENV === 'production' ) {
      res.sendFile(__dirname + "/client/build/index.html");
    } else {
      res.sendFile(__dirname + "/client/public/index.html");
    }
  });
//   -----------------------
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
