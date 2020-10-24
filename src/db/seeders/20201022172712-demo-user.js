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
      {
        id: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        firstName: 'David',
        lastName: 'Copperfield',
      },
      {
        id: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        firstName: 'John',
        lastName: 'Dillinger',
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
      {
        id: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
        displayName: 'Book Shop',
        iconUrl: 'http://books.com',
        funnyGifUrl: 'http://book.com',
      },
      {
        id: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
        displayName: 'Some Gym',
        iconUrl: 'http://somegym.com',
        funnyGifUrl: 'http://somegym.com',
      },
      {
        id: '3c16a13b-d45e-4804-9350-ed76aa069924',
        displayName: 'Cinema',
        iconUrl: 'http://movies.com',
        funnyGifUrl: 'http://movies.com',
      },
      {
        id: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
        displayName: 'Some Gym',
        iconUrl: 'http://somegym.com',
        funnyGifUrl: 'http://somegym.com',
      },
      {
        id: 'd5ad6709-a954-4fcf-8bac-1658d2aa6e86',
        displayName: 'Clothes Shop',
        iconUrl: 'http://clothes.com',
        funnyGifUrl: 'http://clothes.com',
      },
    ]);

    await queryInterface.bulkInsert('Transactions', [
      {
        id: 'ec906a2d-854a-4b92-a17a-a3da0a631ea7',
        date: '2020-10-24T10:07:46.986Z',
        amount: 5182,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'd5ad6709-a954-4fcf-8bac-1658d2aa6e86',
      },
      {
        id: '6eb8c79c-cfb0-4d1c-972b-a87957dcf4be',
        date: '2020-10-23T10:07:46.987Z',
        amount: 8343,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: '090964a6-5c34-402e-8722-3d4683f7dd38',
        date: '2020-10-22T10:07:46.987Z',
        amount: 5660,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: '17b0b7aa-affc-449a-9651-833ea45889bd',
        date: '2020-10-21T10:07:46.987Z',
        amount: 6529,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: '8c2964b8-e39b-488b-a597-2b840a014c9c',
        date: '2020-10-20T10:07:46.988Z',
        amount: 7433,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: 'ef7418d4-1d1c-4db5-935f-0bc78e0a0e1d',
        date: '2020-10-19T10:07:46.988Z',
        amount: 3963,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: '66ebfda6-9a0b-442f-91b5-1a476fd81bd3',
        date: '2020-10-18T10:07:46.988Z',
        amount: 1302,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: '9c2ec2bb-3731-45d4-8c7b-29e7602cb051',
        date: '2020-10-17T10:07:46.988Z',
        amount: 7126,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: '241251c0-ee76-4f61-9ca6-49e16ab92625',
        date: '2020-10-16T10:07:46.988Z',
        amount: 2640,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: '58e7b23a-f8e0-410a-b6f6-a87bf64dfb2e',
        date: '2020-10-15T10:07:46.988Z',
        amount: 2200,
        description: 'expense',
        userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
        merchantId: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
      },
      {
        id: 'cdf9b6b7-43dd-4fa7-a173-5b3a77d1e44c',
        date: '2020-10-24T10:07:46.988Z',
        amount: 6930,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: '01e433b0-817e-448f-b01d-40b90c451920',
        date: '2020-10-23T10:07:46.988Z',
        amount: 2826,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: '61cdc1d3-7316-4b31-9ce5-27811e7d4fac',
        date: '2020-10-22T10:07:46.988Z',
        amount: 7465,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
      },
      {
        id: '4323f23a-3511-49ea-96ce-abc57c1695b3',
        date: '2020-10-21T10:07:46.988Z',
        amount: 5559,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
      },
      {
        id: '125ee7c6-e015-4a6a-8783-54f935adeebd',
        date: '2020-10-20T10:07:46.988Z',
        amount: 8060,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '3c16a13b-d45e-4804-9350-ed76aa069924',
      },
      {
        id: 'b4c2faa0-e01e-4111-9b87-a472c3866d48',
        date: '2020-10-19T10:07:46.988Z',
        amount: 110,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'd5ad6709-a954-4fcf-8bac-1658d2aa6e86',
      },
      {
        id: '113fb21d-562a-4a2c-87c7-caf6329bd3fc',
        date: '2020-10-18T10:07:46.988Z',
        amount: 7328,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
      },
      {
        id: '73826950-9207-4305-8bc0-d7971a0ec37d',
        date: '2020-10-17T10:07:46.988Z',
        amount: 5096,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: 'f23e8ce6-45bb-4423-8bd4-877c2cdc8b47',
        date: '2020-10-16T10:07:46.988Z',
        amount: 7542,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
      },
      {
        id: '94dbfe32-3fd7-406d-9943-938a65ad6cc4',
        date: '2020-10-15T10:07:46.988Z',
        amount: 1175,
        description: 'expense',
        userId: '5d2179e5-9928-469f-b9da-5829d3d297cd',
        merchantId: '4d6618f3-23eb-470f-aae1-a6a65e736f40',
      },
      {
        id: '12eb4d21-fbd9-4db9-b684-06529642d729',
        date: '2020-10-24T10:07:46.988Z',
        amount: 7168,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
      },
      {
        id: '911bcc17-aa0e-4f08-9745-d70975e435dc',
        date: '2020-10-23T10:07:46.988Z',
        amount: 1776,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: '382123df-2dca-4458-9677-8feade9740f9',
        date: '2020-10-22T10:07:46.988Z',
        amount: 7519,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: '5f47ac9f-953c-4b75-bd59-5bbb8efd4601',
        date: '2020-10-21T10:07:46.988Z',
        amount: 6586,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
      },
      {
        id: 'a3027763-cb25-4e09-bc00-98ad586f7379',
        date: '2020-10-20T10:07:46.988Z',
        amount: 1740,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: '56d4abfc-3b40-4e63-9dc6-26e5242970f1',
        date: '2020-10-19T10:07:46.988Z',
        amount: 3369,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'd5ad6709-a954-4fcf-8bac-1658d2aa6e86',
      },
      {
        id: '7dcd9af8-4ce3-4b46-934d-a61937a6b40e',
        date: '2020-10-18T10:07:46.988Z',
        amount: 6900,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: '74d219d3-a4d7-458d-9bdd-7cee0484e63f',
        date: '2020-10-17T10:07:46.988Z',
        amount: 7433,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'd5ad6709-a954-4fcf-8bac-1658d2aa6e86',
      },
      {
        id: 'd11750c4-5c6c-44f1-801c-75cd2b5eff12',
        date: '2020-10-16T10:07:46.989Z',
        amount: 239,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
      },
      {
        id: 'a3a61b29-8b0b-4594-8c9e-080bb4289962',
        date: '2020-10-15T10:07:46.989Z',
        amount: 126,
        description: 'expense',
        userId: 'aa9b170f-dc31-483c-9e99-7576081b544b',
        merchantId: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
      },
      {
        id: 'a57db25e-ed75-434f-8ca9-5e586b8a144b',
        date: '2020-10-24T10:07:46.989Z',
        amount: 5199,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: '2089a178-373f-433c-b2c1-457dca063609',
        date: '2020-10-23T10:07:46.989Z',
        amount: 8738,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: '76a19790-ddb9-40b8-88f8-7dbf7e22e550',
        date: '2020-10-22T10:07:46.989Z',
        amount: 2147,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
      },
      {
        id: 'b3585f35-89fb-4ea7-8d37-9c4976fbb3e7',
        date: '2020-10-21T10:07:46.989Z',
        amount: 3639,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: 'bc705873-e27c-473f-a170-3f17dbcbae75',
        date: '2020-10-20T10:07:46.989Z',
        amount: 2576,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '4d6618f3-23eb-470f-aae1-a6a65e736f40',
      },
      {
        id: '6607b592-0c01-42c1-9d39-43f18e5337c7',
        date: '2020-10-19T10:07:46.989Z',
        amount: 9982,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: '7ae70241-6c6a-4d4c-96e0-c97fc0d2b3fb',
        date: '2020-10-18T10:07:46.989Z',
        amount: 8404,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '99b3e175-f2ff-491b-8d0b-ca2d9feeca65',
      },
      {
        id: 'a439c4cb-9d08-4b34-8490-f9d632662bfc',
        date: '2020-10-17T10:07:46.989Z',
        amount: 9105,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
      },
      {
        id: '11c170e5-a9b3-478d-8513-2c5fcd6281ff',
        date: '2020-10-16T10:07:46.989Z',
        amount: 5506,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: '4d6618f3-23eb-470f-aae1-a6a65e736f40',
      },
      {
        id: '83a7aa5a-8983-4e50-9e4e-e164889fb089',
        date: '2020-10-15T10:07:46.989Z',
        amount: 7193,
        description: 'expense',
        userId: '1a84712a-ccf8-4123-9bbe-4a85b91ae01f',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: 'b8d2d52c-a3bc-436a-aed5-54f9ae5c9a3b',
        date: '2020-10-24T10:07:46.989Z',
        amount: 8458,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'a0a92ac5-39b9-4368-80fc-74af00af49a5',
      },
      {
        id: 'ce5e20c8-28ff-4afa-b660-3e6402a53a9b',
        date: '2020-10-23T10:07:46.989Z',
        amount: 1127,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: 'ac0590e8-76a4-42a9-b67b-88a932d27bd6',
        date: '2020-10-22T10:07:46.989Z',
        amount: 2024,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'fd354cf0-1db0-4bd0-be7d-a91dbdc74019',
      },
      {
        id: '0bf1e3e8-761b-4234-bba4-7363d88957a0',
        date: '2020-10-21T10:07:46.989Z',
        amount: 2257,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
      },
      {
        id: '633ad7d8-9ebe-46d8-a329-2e61fa96e409',
        date: '2020-10-20T10:07:46.989Z',
        amount: 4194,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: 'c0cf6e46-6b73-4401-9ac7-3c1ee1a98e6a',
        date: '2020-10-19T10:07:46.989Z',
        amount: 6316,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: '3c16a13b-d45e-4804-9350-ed76aa069924',
      },
      {
        id: 'a1a062ef-d029-48e7-98fd-110c2fdf9dd1',
        date: '2020-10-18T10:07:46.989Z',
        amount: 9665,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'daf41398-3276-45d7-9746-88e86b1d3ba2',
      },
      {
        id: '217bcf71-cb6a-4a65-8aa6-877362181734',
        date: '2020-10-17T10:07:46.989Z',
        amount: 2782,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: '35cc9417-7cd8-440e-bfa8-ce9b9730abf7',
      },
      {
        id: '45e5b775-46b0-4fc8-88d2-d244101b607d',
        date: '2020-10-16T10:07:46.989Z',
        amount: 1794,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
        merchantId: 'cb6b7e99-e8db-416a-8c78-4d4891ddb26b',
      },
      {
        id: '7da40aad-0d92-42a2-bccb-d64240305c87',
        date: '2020-10-15T10:07:46.989Z',
        amount: 7227,
        description: 'expense',
        userId: '45ed02f6-c873-46b0-b8e3-68e262f77e4b',
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
