'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_de_habitacion: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.FLOAT
      },
      piso: {
        type: Sequelize.INTEGER
      },
      max_personas: {
        type: Sequelize.INTEGER
      },
      tiene_cama_debe: {
        type: Sequelize.INTEGER
      },
      tiene_ducha: {
        type: Sequelize.INTEGER
      },
      tiene_bano: {
        type: Sequelize.INTEGER
      },
      tiene_balcon: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitaciones');
  }
};