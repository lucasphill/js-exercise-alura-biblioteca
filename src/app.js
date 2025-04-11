import express from "express";
import dbConn from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conn = await dbConn(); // instancia uma conexão com o banco mongodb

// caso o mongoose retorne um evento chamado error será executado a arrowfunc mostrando o erro no console
conn.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conn.once("open", () => {
  console.log("Conexão com MongoDB OK");
});

const app = express();
app.use(express.json()); // converte body de todas as requisições para um json

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node com express");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", async (req, res) => {
  const listaLivro = await livro.findById(req.params.id);
  res.status(200).json(listaLivro);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(201).send("Livro atualizado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});

export default app;
