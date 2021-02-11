'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn('Jobs','interviewed', {type:Sequelize.BOOLEAN})
     await queryInterface.addColumn('Jobs','date_interviewed', {type:Sequelize.DATE})
     await queryInterface.addColumn('Users','iq_day', {type:Sequelize.STRING})
     await queryInterface.addColumn('Users','iq_time', {type:Sequelize.STRING})
     
     
    },
    
    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        
        await queryInterface.removeColumn('Jobs','interviewed')
        await queryInterface.removeColumn('Jobs','date_interviewed')
        await queryInterface.removeColumn('Users','iq_time')
        await queryInterface.removeColumn('Users','iq_day')
    }
};
