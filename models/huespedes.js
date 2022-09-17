'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class huespedes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  huespedes.init({
    huesped_id: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.DOUBLE,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'huespedes',
  });
  return huespedes;
};