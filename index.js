const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('<center><h2>Hello from "All you Need to Know About Starting With Docker"!</h2></center>'))

server = app.listen(port, () => console.log(`Open your browser at localhost:${port}`))

process.on('SIGINT', () => {
  server.close()  
});
