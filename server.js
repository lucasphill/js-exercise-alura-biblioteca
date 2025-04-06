import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de Node.js",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // cria o header da requisição http (NADA A VER com html)
  res.end(rotas[req.url]); // retorna minhas rotas
});

// servidor ouvindo porta 3000
server.listen(PORT, () => {
  console.log("Server listening");
});
