const uuid = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        firstName: 'Winston',
        lastName: 'Smith',
      },
      {
        id: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        firstName: 'Henry',
        lastName: 'Case',
      },
      {
        id: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        firstName: 'John',
        lastName: 'Doe',
      },
    ]);

    await queryInterface.bulkInsert('Merchants', [
      {
        id: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
        displayName: 'Ministry Of Truth',
        iconUrl: 'http://whathistoryusedtobe.com',
        funnyGifUrl: 'http://smileyface.com',
      },
      {
        id: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
        displayName: 'Food Shop',
        iconUrl: 'http://buyfood.com',
        funnyGifUrl: 'http://food.com',
      },
      {
        id: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
        displayName: 'Newsagent',
        iconUrl: 'http://newsagent.com',
        funnyGifUrl: 'http://newsagent.com',
      },
      {
        id: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
        displayName: 'Coffee Shop',
        iconUrl: 'http://coffeeshop.com',
        funnyGifUrl: 'http://coffeeshop.com',
      },
      {
        id: '4d6618f3-23eb-470f-aae1-a6a65e736f40',
        displayName: 'Bike Shop',
        iconUrl: 'http://bikestuff.com',
        funnyGifUrl: 'http://bikestuff.com',
      },
    ]);

    await queryInterface.bulkInsert('Transactions', [
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.000Z',
        amount: 1984,
        description: 'Orwellian expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: uuid.v4(),
        date: '2020-01-01T00:00:00.001Z',
        amount: 2020,
        description: 'Nothing has changed',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: uuid.v4(),
        date: '2020-01-01T00:00:00.001Z',
        amount: 1020,
        description: 'Some food',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 5020,
        description: 'Some more food',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: uuid.v4(),
        date: '2020-01-01T00:00:00.001Z',
        amount: 300,
        description: 'Some food',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 510,
        description: 'Some more food',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 1010,
        description: 'News stuff',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 510,
        description: 'News stuff',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 510,
        description: 'coffee',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 510,
        description: 'coffee',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },

      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 2300,
        description: 'News stuff',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 4000,
        description: 'News stuff',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 60,
        description: 'coffee',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 100,
        description: 'coffee',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 10000,
        description: 'bikes and stuff',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: '4d6618f3-23eb-470f-aae1-a6a65e736f40',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 1000,
        description: 'coffee break',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 5000,
        description: 'coffee break',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 6000,
        description: 'coffee break',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: uuid.v4(),
        date: '2019-01-01T00:00:00.001Z',
        amount: 1000,
        description: 'coffee break',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Transactions', null, {});
    await queryInterface.bulkDelete('Merchants', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
