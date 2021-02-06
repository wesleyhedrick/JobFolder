'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Users.hasMany(models.Jobs, {
            foreignKey: 'user_id'
        });
        Users.hasMany(models.Documents, {
            foreignKey: 'user_id'
        });
        Users.hasOne(models.Settings, {
            foreignKey: 'user_id'
        });
        Users.hasMany(models.InterviewQuestions, {
            foreignKey: 'user_id'
        })
    }
  };
  Users.init({
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    username: {type: DataTypes.STRING, allowNull:false, unique:true},
    password: DataTypes.STRING,
    email: {type: DataTypes.STRING, allowNull:true, unique:true},
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    zip: DataTypes.STRING,
    state: DataTypes.STRING,
    daily_app_goal:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};