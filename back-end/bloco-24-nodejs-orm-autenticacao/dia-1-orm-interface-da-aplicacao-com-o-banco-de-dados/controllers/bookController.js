const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo deu errado'});
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if(!book) return res.status(404).json({message: 'Livro não encontrado'});
    return res.status(200).json(book);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Deu ruim...'});
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({title, author, pageQuantity});
    res.status(201).json(newBook);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Nada feito...'})
  }

})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [book] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log('giisfsi',book);
    if(!book) return res.status(404).json({message: 'Livro não encontrado'});
    return res.status(200).json({ message: 'Livro atualizado'});

  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Deu ruim...'});
  }
  
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy(
      { where: { id } },
    );
    console.log('delete', book);
    if(!book) return res.status(404).json({message: 'Livro não encontrado'});
    return res.status(200).json({message: 'Livro excluído com sucesso!!!'});

  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: 'Deu ruim...'});
  }

});

module.exports = router;