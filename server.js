var http = require("http");
var app = require("./express");

var server = http.createServer(app).listen(app.get("port"), function(){
    console.log("Express Server listening on port", server.address().port);
});