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

    static async getOneDate(date){
        const [results, metadata] = await sequelize.query(
            // `select "date_applied" from "Jobs" where "user_id"=14 and "date_applied" like '${date}%' limit 1`
            `select "date_applied" from "Jobs" where "date_applied" between '2021-02-11' and '2021-03-03'`
        )

        return results
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
    user_id:DataTypes.INTEGER,
    interviewed:DataTypes.BOOLEAN,
    date_interviewed:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};
