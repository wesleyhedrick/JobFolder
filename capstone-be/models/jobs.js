'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Jobs.belongsTo(models.Users, {
            foreignKey: 'user_id'
        });
    }
  };
  Jobs.init({
    company_name: DataTypes.STRING,
    role: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    date_applied: DataTypes.DATE,
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};