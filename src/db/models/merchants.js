const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Merchants extends Model {
    static associate(models) {
      Merchants.hasMany(models.Transactions, { foreignKey: 'merchantId' });
    }
  }
  Merchants.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iconUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funnyGifUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Merchants',
  });
  return Merchants;
};
