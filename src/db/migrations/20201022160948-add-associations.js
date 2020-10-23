module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Transactions',
      'userId', // name of the key we're adding
      {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
    );

    await queryInterface.addColumn(
      'Transactions',
      'merchantId',
      {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'Merchants',
          },
          key: 'id',
        },
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      'Transactions',
      'userId',
    );
    await queryInterface.removeColumn(
      'Transactions',
      'merchantId',
    );
  },
};
