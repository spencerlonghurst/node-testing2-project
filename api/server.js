const express = require("express");

// const Hobbits = require("./hobbits/hobbits-model.js");

const server = express();

server.use(express.json());


server.use('/', (req, res, next) => {
  next({ status: 200, message: 'bro it found' })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})



module.exports = server