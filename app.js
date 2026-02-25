const express = require('express');
const { log } = require('node:console');

const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

app.all('/secret', (req, res) => {
    res.send('secret section');
    
})

// const requestTime = function (req, res, next) {
//   req.requestTime = new Date()

//   next()
// }

// app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen('3000', () => {
    console.log('server running on port 3000');
})