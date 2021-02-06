'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn('Documents', 'user_id', { type: Sequelize.INTEGER });
    await queryInterface.addColumn('Jobs', 'user_id', { type: Sequelize.INTEGER });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Documents', 'user_id');
    await queryInterface.removeColumn('Jobs', 'user_id');
  }
};
