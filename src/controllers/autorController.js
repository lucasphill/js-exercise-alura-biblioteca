import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao carregar lista de autores` });
    }
  }
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao carregar autor` });
    }
  }
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .send({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar autor` });
    }
  }
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao atualizar autor` });
    }
  }
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor removido com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao remover autor` });
    }
  }
}

export default AutorController;
