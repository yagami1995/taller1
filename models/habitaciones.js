'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  habitaciones.init({
    numero_de_habitacion: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    piso: DataTypes.INTEGER,
    max_personas: DataTypes.INTEGER,
    tiene_cama_debe: DataTypes.INTEGER,
    tiene_ducha: DataTypes.INTEGER,
    tiene_bano: DataTypes.INTEGER,
    tiene_balcon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'habitaciones',
  });
  return habitaciones;
};