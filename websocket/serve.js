"use strict";
let express = require("express");
let path = require("path");
let app = express();
let server = require('http').createServer(app)

app.use('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'))
})

server.on("3000", function() {
  console.log("The service listening on 3000 port")
})