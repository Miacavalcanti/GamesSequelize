const express = require('express');
const Game = require('../models/page');

const router = express.Router();

router.post('/games', async (req, res) => {
  try {
    const { nome, genero, plataforma, preco } = req.body;

 const game = await Game.create({ nome, genero, plataforma, preco });
     res.status(201).json(game);
  } catch (erro) {
    res.status(400).json({ erro: error.message });
  }
});

router.get('/games', async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (erro) {
    res.status(500).json({ erro: error.message });
  }
});

router.get('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ erro: 'O jogo que você pesquisou não foi encontrado!' });
    }
  } catch (erro) {
    res.status(500).json({ erro: error.message });
  }
});

router.put('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, genero, plataforma, preco } = req.body;
    const game = await Game.findByPk(id);
    if (game) {
      await game.update({ nome, genero, plataforma, preco });
      res.json(game);
    } else {
      res.status(404).json({ erro: 'Busca não encontrada.' });
    }
  } catch (erro) {
    res.status(400).json({ erro: error.message });
  }
});

router.delete('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);
    if (game) {
      await game.destroy();
      res.json({ message: 'Game deleted successfully' });
    } else {
      res.status(404).json({ erro: 'Jogo não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;
