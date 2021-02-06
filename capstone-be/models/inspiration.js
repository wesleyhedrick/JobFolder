'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inspiration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static getRandom() {
        return Inspiration.findAll({
            order: sequelize.random(),
            limit:1
        })
    }
  };
  Inspiration.init({
    author: {type: DataTypes.STRING, allowNull:false, unique:true},
    quote: {type: DataTypes.STRING, allowNull:false, unique:true},
    category: {type: DataTypes.STRING, allowNull:false, unique:true}
  }, {
    sequelize,
    modelName: 'Inspiration',
  });
  return Inspiration;
};