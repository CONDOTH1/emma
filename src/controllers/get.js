const sequelize = require('sequelize');
const db = require('../db/models');

/**
 * Accepts params to construct sql query via sequelize to calculate the amount and percentile of
 * user spend by merchant over a given time period. Returns user spend by merchantId with percentile
 * and merchant display name.
 * @param {String} userId - unique user identifier
 * @param {String} fromDate - date time
 * @param {String} toDate - date time
 * @returns {Promise<Array<Object>>}
 */
const getUserSpend = async (userId, fromDate, toDate) => {
  try {
    const userTransactionData = await db.Transactions.findAll({
      attributes: [
        'merchantId',
        'userId',
        [sequelize.literal('CAST(SUM(amount) AS INTEGER)'), 'amount'],
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
