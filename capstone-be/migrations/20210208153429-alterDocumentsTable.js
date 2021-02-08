'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Documents','resume')
    await queryInterface.removeColumn('Documents','cover_letter')
    await queryInterface.removeColumn('Documents','thank_you')
    await queryInterface.addColumn('Documents','doc_type', {type:Sequelize.STRING})
    

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
