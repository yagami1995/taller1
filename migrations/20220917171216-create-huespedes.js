'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('huespedes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      huesped_id: {
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.DOUBLE
      },
      correo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('huespedes');
  }
};