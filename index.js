// Importing Express to archive
const express = require("express");
// Starting the project
const server = express();
server.use(express.json())
const cursos = ['NodeJS', 'JavaScript', 'React Native']

// * req: request data | res: response in front
// * send() retorna string | json() \(°°)/

// * Query params = ?nome=NodeJS | Route params = /curso/2 | Request Body = { nome: 'NodeJS', tipo: 'BackEnd' }
server.get("/cursos/:index", (req, res) => {
  // const nome = req.query.nome
  // const id = req.params.id
  const {index} = req.params // * That is const index = req.params.index 
  return res.json(cursos[index]);
});

server.get("/cursos", (req, res) => {
  return res.json(cursos)
})

// Adding a curse
server.post('/cursos', (req, res) => {
  const { name } = req.body
  cursos.push(name)
  return res.json(cursos)
})

server.put('/cursos/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body
  cursos[index] = name

  return res.json(cursos)
})

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params
  cursos.splice(index, 1)

  return res.json({message: "Curso excluído com sucesso"})
})

// Setting the server in localhost:3000
server.listen(3000);