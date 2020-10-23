const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      Transactions.belongsTo(models.Users, { foreignKey: 'userId' });
      Transactions.belongsTo(models.Merchants, { foreignKey: 'merchantId' });
    }
  }
  Transactions.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: 'TIMESTAMP',
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};
