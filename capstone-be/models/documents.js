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
    resume: DataTypes.STRING,
    cover_letter: DataTypes.STRING,
    thank_you: DataTypes.STRING,
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documents',
  });
  return Documents;
};