const Sequelize = require('sequelize');

const database = require("../db");

const Categoria = sequelize.define('categorias', {

    login: {

        type: Sequelize.INTEGER,

        autoIncrement: true,

        allowNull: false,

        primaryKey: true

    },
    login2: {

        type: Sequelize.STRING,

        allowNull: false

    },

    descricao: {

        type: Sequelize.STRING,

    },

});

module.exports = Produto;