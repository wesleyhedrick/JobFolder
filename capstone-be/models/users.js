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
      
    static async getJobs() {
     
        const [results, metadata] = await sequelize.query(`select U.id as Userid, 
            U.first, U.last, U.email, J.role, J.company_name from
            "Users" as U join "Jobs" as J on U.id = J.user_id
            `);

        return results
    }

    
    static async getReminderEmailData(date, whichDate){
        const [results, metadata] = await sequelize.query(
            `select j.company_name, j.role, u.first, u.email 
            from "Jobs" as j join "Users" as u
            on j.user_id = u.id
            // where j.${whichDate} between '${date}' and '${date}'`
            )
        return results
    }

    static async qetInterviewQuestions(day, time){
        let upper = time+5;
        let lower = time-5;

        const [results, metadata] = await sequelize.query(
            `select u.first, iq.question, iq.answer, u.email
            from "Users" as u join "InterviewQuestions" as iq
            on u.id = iq.user_id
            where u.iq_day = ${day} and u.iq_time between ${lower} and ${upper}`
        )

        return results
    }
  };
  Users.init({
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {type: DataTypes.STRING, allowNull:true, unique:true},
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    zip: DataTypes.STRING,
    state: DataTypes.STRING,
    daily_app_goal:DataTypes.INTEGER,
    iq_mon:DataTypes.BOOLEAN,
    mon_iq_time:DataTypes.INTEGER,
    iq_tue:DataTypes.BOOLEAN,
    tue_iq_time:DataTypes.INTEGER,
    iq_wed:DataTypes.BOOLEAN,
    wed_iq_time:DataTypes.INTEGER,
    iq_thu:DataTypes.BOOLEAN,
    thu_iq_time:DataTypes.INTEGER,
    iq_fri:DataTypes.BOOLEAN,
    fri_iq_time:DataTypes.INTEGER,
    iq_sat:DataTypes.BOOLEAN,
    sat_iq_time:DataTypes.INTEGER,
    iq_sun:DataTypes.BOOLEAN,
    sun_iq_time:DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};





