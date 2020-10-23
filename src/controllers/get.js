const sequelize = require('sequelize');
const db = require('../db/models');

const getUserSpend = async (userId, fromDate, toDate) => {
  try {
    const userTransactionData = await db.Transactions.findAll({
      attributes: [
        'merchantId',
        'userId',
        [sequelize.literal('sum(amount)'), 'amount'],
        [sequelize.literal('PERCENT_RANK() OVER (PARTITION BY "merchantId" ORDER BY sum(amount))'), 'pctRank'],
      ],
      where: {
        [sequelize.Op.and]: {
          date: {
            [sequelize.Op.and]: {
              [sequelize.Op.gte]: fromDate,
              [sequelize.Op.lte]: toDate,
            },
          },
          merchantId: [sequelize.literal(`SELECT "merchantId" FROM "Transactions" where "userId"='${userId}'`)],
        },
      },
      group: [
        'merchantId',
        'userId',
        'Merchant.id',
      ],
      include: {
        model: db.Merchants,
        attributes: ['displayName'],
        required: true,
      },
    });
    return userTransactionData.filter((trxObj) => trxObj.userId === userId);
  } catch (error) {
    console.log('error: ', error);
    throw error;
  }
};

module.exports = getUserSpend;
