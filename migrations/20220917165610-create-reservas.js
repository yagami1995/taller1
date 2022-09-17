'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservas_id: {
        type: Sequelize.INTEGER
      },
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
      },
      idhabitaciones: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tablename:'habitaciones',
          },
          key:'idhabitaciones'

        },
        allowNull:flase
      },
      idhuespedes: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tablename:'huespedes',
          },
          key:'idhuespedes'
      },
      allowNull:false 
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};