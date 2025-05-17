// Importing Express to archive
const express = require('express')

// Starting the project
const server = express()

// localhost:3000/curso
// * req: request data | res: response in front
// * send() retorna string | json() \(°°)/
server.get('/curso', (req, res) =>{
  return res.json({ nome: 'Guiguiba' })
})


// Setting the server in localhost:3000
server.listen(3000)