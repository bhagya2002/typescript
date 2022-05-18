"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var crmRoutes_1 = require("./src/routes/crmRoutes");
var app = express();
var PORT = 3000;
// mongoose connection
mongoose.connect("mongodb://linkedintest:linkedintest12345@linkedin-api.b44pa.mongodb.net/?retryWrites=true&w=majority");
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
(0, crmRoutes_1.default)(app);
// serving static files
app.use(express.static("public"));
app.get("/", function (req, res) {
    return res.send("Node and express server is running on port ".concat(PORT));
});
app.listen(PORT, function () { return console.log("your server is running on port ".concat(PORT)); });
