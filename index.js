var express = require("express");
var morgan  = require("morgan");
var path    = require("path")

var app = express();

app.use( express.static("public") );
// app.use( "/data", express.static("data") );
app.use( express.static("bower_components") );
app.use( morgan("dev") );

app.get("/", function(req, res){
  res.sendFile( path.resolve( __dirname + "/public/views/index.html"));
})

app.get("/data/us.json", function(req, res){
  console.log("sending " + __dirname + "/data/us.json")
  res.sendFile( path.resolve( __dirname + "/data/us.json") );
})

app.get("/data/unemployment.tsv", function(req, res){
  res.sendFile( path.resolve( __dirname + "/data/unemployment.tsv") );
})

var port = process.env.PORT || 3000;
app.listen( port, function(){
  console.log("D3 APP STARTED");
} )
