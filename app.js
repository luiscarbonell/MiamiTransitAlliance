'use strict'

let express = require('express')

let app = express()

app.use(express.static(__dirname + "/client/this-map"))

app.listen(80, function() {
  console.log("Running on port 80")
}) 