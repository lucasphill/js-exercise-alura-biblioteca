import mongoose from "mongoose";
import { autorSchema } from "../models/Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    ano: { type: Number },
    paginas: { type: Number },
    preco: { type: Number },
    autor: autorSchema,
  },
  { versionKey: false }
);

// model que informa a collection e recebe o schema
const livro = mongoose.model("livros", livroSchema);

export default livro;
