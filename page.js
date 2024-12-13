const { DataTypes } = require('sequelize');
const sequelize = require('../configurar/bd');

const Game = sequelize.define('Game', {
  nome: {
  type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plataforma: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Game;
