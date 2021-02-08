'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     
    static associate(models) {
        // define association here
        Documents.belongsTo(models.Users, {
            foreignKey: 'user_id'
        });
    }
  };
  Documents.init({
    title:DataTypes.STRING,
    doc_type:DataTypes.STRING,
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documents',
  });
  return Documents;
};