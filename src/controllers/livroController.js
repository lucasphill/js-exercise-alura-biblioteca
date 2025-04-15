import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao carregar lista de livros` });
    }
  }
  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao carregar livro` });
    }
  }
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorLivro = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorLivro._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .send({ message: "Livro cadastrado com sucesso", livro: livroCriado });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao cadastrar livro` });
    }
  }
  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      // if (id === null) {
      //   return res.status(204).json("Livro não encontrado");
      // }
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao atualizar livro` });
    }
  }
  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro removido com sucesso" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao remover livro` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const listaLivrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json({ listaLivrosPorEditora });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha ao buscar livros desse autor` });
    }
  }
}

export default LivroController;
