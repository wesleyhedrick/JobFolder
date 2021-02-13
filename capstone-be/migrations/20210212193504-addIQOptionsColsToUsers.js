'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    

    




    await queryInterface.removeColumn('Users',`tue`)
    
    
    await queryInterface.addColumn('Users',`iq_tue`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`tue_iq_time`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`iq_wed`, {type:Sequelize.BOOLEAN})
    await queryInterface.addColumn('Users',`wed_iq_time`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`iq_thu`, {type:Sequelize.BOOLEAN})
    await queryInterface.addColumn('Users',`thu_iq_time`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`iq_fri`, {type:Sequelize.BOOLEAN})
    await queryInterface.addColumn('Users',`fri_iq_time`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`iq_sat`, {type:Sequelize.BOOLEAN})
    await queryInterface.addColumn('Users',`sat_iq_time`, {type:Sequelize.INTEGER})
    await queryInterface.addColumn('Users',`iq_sun`, {type:Sequelize.BOOLEAN})
    await queryInterface.addColumn('Users',`sun_iq_time`, {type:Sequelize.INTEGER})



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
