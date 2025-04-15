import express from "express";
import dbConn from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conn = await dbConn(); // instancia uma conexão com o banco mongodb

// caso o mongoose retorne um evento chamado error será executado a arrowfunc mostrando o erro no console
conn.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conn.once("open", () => {
  console.log("Conexão com MongoDB OK");
});

const app = express();
routes(app);

export default app;
