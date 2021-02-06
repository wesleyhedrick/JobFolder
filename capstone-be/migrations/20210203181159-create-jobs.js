'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      role: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING,
        validate: {isUrl: true}
      },
      contact_name: {
        type: Sequelize.STRING
      },
      contact_phone: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING, 
        validate:{isEmail:true}
      },
      date_applied: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jobs');
  }
};