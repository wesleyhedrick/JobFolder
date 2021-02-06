'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        Settings.belongsTo(models.Users, {
            foreignKey: 'user_id'
        });
    }
  };
  Settings.init({
    coding_questions: DataTypes.BOOLEAN,
    thank_you_notes: DataTypes.BOOLEAN,
    follow_up_emails: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Settings',
  });
  return Settings;
};