# Emma Challenge

## Solution overview

For performance purposes in order to find a scalable solution to the problem I decided to rely on the database to do the more intensive work. The api is set up to receive a userId in the path and fromDate and toDate in the query. This request is validated using an openApi schema validator. Once the request, data types and required fields have been satisfied the necessary parameters are passed from the router to the controller which relies on sequelize orm to construct an SQL query similar to the below:

```
SELECT "Transactions"."merchantId", "Transactions"."userId", CAST(SUM(amount) AS INTEGER) AS "amount", PERCENT_RANK() OVER (PARTITION BY "merchantId" ORDER BY sum(amount)) AS "pctRank", "Merchant"."id" AS "Merchant.id", "Merchant"."displayName" AS "Merchant.displayName" FROM "Transactions" AS "Transactions" INNER JOIN "Merchants" AS "Merchant" ON "Transactions"."merchantId" = "Merchant"."id" WHERE (("Transactions"."date" >= '2019-10-24T10:07:46.986Z' AND "Transactions"."date" <= '2020-10-25T10:07:46.986Z') AND "Transactions"."merchantId" IN (SELECT "merchantId" FROM "Transactions" where "userId"='7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a')) GROUP BY "merchantId", "userId", "Merchant"."id";
```

This query will get the required attributes from the DB, it will sum the amounts of all merchants that the userId spent with over the given time period and calculate the total spend with those merchants by all users. It then calculates the percentile of the userId's sum of amounts against the total of all users. It then returns an data in the below format which needs to be filtered by the application for just the specified userId:

```
    [{
      merchantId: '4c1e650c-5157-4301-a7ec-52ffc0c16077',
      userId: '7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a',
      amount: 2200,
      pctRank: 0,
      Merchant: { displayName: 'Some Gym' },
    }]
```

## Getting Started

- Clone the repo
- Run `npm i`

### Start the service WITHOUT docker

- Set up and run an instance of postgres on your local machine
- Set the required variables in the file `./scripts/set` to match your current running postgres instance and then run `source ./scripts/set` - this provides the necessary environment variables for the service to connect your database.
- To run the db migrations run `npm run db:migrate` - this will set up the necessary tables and associations
- To seed the db with test data run `npm run db:seed:all` - updating the seed data will effect the tests which rely on this seed data.
- The last two steps are also combine in `npm run db:buildup`
- To remove all the data from the db run `npm run db:seed:undo`
- To drop the tables from the db run `npm run db:migrate:undo`
- The last two steps are also combine in `npm run db:teardown`

### Start the service WITH docker

- Ensure you have docker and docker-compose set up
- Run `npm run docker:start` - this will build up the database and the app as well as seed the database
- You can then sent a GET request with a query like so: `http://localhost:3000/emma/users/7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a/spend?fromDate=2019-10-24T10%3A07%3A46.986Z&toDate=2020-10-25T10%3A07%3A46.986Z`
- You can find more valid userIds in the `./db/seeders` directory
- To shut down run ctrl + c, then run docker-compose down

### Running tests WITHOUT docker

- Ensure you have the db running, the db migrated and the seed data in place - (see Start the service WITHOUT docker section above)
- Run `npm run test:component`


### Running tests WITH docker

- Ensure you have docker and docker-compose set up
- Run `npm run docker:test`
- This should start the db, service and run the tests in `watch` mode, so when you make a change in the application code it should re-run the tests

## Documentation

Primary documents for this service is this `README` and the openApi definition in the `./definitions` directory

## Structure

This project is set up with a main directory called `src`, within this directory there is:

- `app.js` which holds the server
- `router` directory holds the directory
- `controller` directory holds the main logic that constructs the sql query
- `db` which holds all the database connection/setup - relies on sequelize
- `utils` there is also a utils function for either shared code, loggers or other utils functions

The `test` directory holds all tests
The `scripts` directory holds bash scripts

## Improvements - Extensions to work done now

- Pagination - easy feature to include, sequelize allows the passing of offset and limit which could be passed in with the query and down through to sequelize

## Possible other solution

- Have a background task that is triggered during ingest of transactions which keeps a rolling count of merchant spends for a given day this could be stored on a dedicated table and easily queried against
- Or potentially have a scheduled task which is run at the end of day that calculates merchant spends and stores it against dedicated table.

## The Solution

As mentioned above the relies on SQL query to calculate user spend. It creates a query similar to the below:

```
SELECT "Transactions"."merchantId", "Transactions"."userId", CAST(SUM(amount) AS INTEGER) AS "amount", PERCENT_RANK() OVER (PARTITION BY "merchantId" ORDER BY sum(amount)) AS "pctRank", "Merchant"."id" AS "Merchant.id", "Merchant"."displayName" AS "Merchant.displayName" FROM "Transactions" AS "Transactions" INNER JOIN "Merchants" AS "Merchant" ON "Transactions"."merchantId" = "Merchant"."id" WHERE (("Transactions"."date" >= '2019-10-24T10:07:46.986Z' AND "Transactions"."date" <= '2020-10-25T10:07:46.986Z') AND "Transactions"."merchantId" IN (SELECT "merchantId" FROM "Transactions" where "userId"='7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a')) GROUP BY "merchantId", "userId", "Merchant"."id";
```

The above query generates a table:

```
              merchantId              |                userId                | amount |      pctRank       |             Merchant.id              | Merchant.displayName 
--------------------------------------+--------------------------------------+--------+--------------------+--------------------------------------+----------------------
 4c1e650c-5157-4301-a7ec-52ffc0c16077 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |   2200 |                  0 | 4c1e650c-5157-4301-a7ec-52ffc0c16077 | Some Gym
 4c1e650c-5157-4301-a7ec-52ffc0c16077 | 45ed02f6-c873-46b0-b8e3-68e262f77e4b |   2257 |                0.5 | 4c1e650c-5157-4301-a7ec-52ffc0c16077 | Some Gym
 4c1e650c-5157-4301-a7ec-52ffc0c16077 | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f |  11252 |                  1 | 4c1e650c-5157-4301-a7ec-52ffc0c16077 | Some Gym
 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | aa9b170f-dc31-483c-9e99-7576081b544b |   6900 |                  0 | 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | Newsagent
 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | 5d2179e5-9928-469f-b9da-5829d3d297cd |   6930 | 0.3333333333333333 | 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | Newsagent
 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f |  18386 | 0.6666666666666666 | 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | Newsagent
 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |  19622 |                  1 | 99b3e175-f2ff-491b-8d0b-ca2d9feeca65 | Newsagent
 a0a92ac5-39b9-4368-80fc-74af00af49a5 | 5d2179e5-9928-469f-b9da-5829d3d297cd |   5096 |                  0 | a0a92ac5-39b9-4368-80fc-74af00af49a5 | Coffee Shop
 a0a92ac5-39b9-4368-80fc-74af00af49a5 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |   8343 |               0.25 | a0a92ac5-39b9-4368-80fc-74af00af49a5 | Coffee Shop
 a0a92ac5-39b9-4368-80fc-74af00af49a5 | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f |   8838 |                0.5 | a0a92ac5-39b9-4368-80fc-74af00af49a5 | Coffee Shop
 a0a92ac5-39b9-4368-80fc-74af00af49a5 | aa9b170f-dc31-483c-9e99-7576081b544b |   9259 |               0.75 | a0a92ac5-39b9-4368-80fc-74af00af49a5 | Coffee Shop
 a0a92ac5-39b9-4368-80fc-74af00af49a5 | 45ed02f6-c873-46b0-b8e3-68e262f77e4b |  15685 |                  1 | a0a92ac5-39b9-4368-80fc-74af00af49a5 | Coffee Shop
 d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | 5d2179e5-9928-469f-b9da-5829d3d297cd |    110 |                  0 | d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | Clothes Shop
 d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |   5182 |                0.5 | d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | Clothes Shop
 d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | aa9b170f-dc31-483c-9e99-7576081b544b |  10802 |                  1 | d5ad6709-a954-4fcf-8bac-1658d2aa6e86 | Clothes Shop
 daf41398-3276-45d7-9746-88e86b1d3ba2 | aa9b170f-dc31-483c-9e99-7576081b544b |   1776 |                  0 | daf41398-3276-45d7-9746-88e86b1d3ba2 | Food Shop
 daf41398-3276-45d7-9746-88e86b1d3ba2 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |   6603 |                0.5 | daf41398-3276-45d7-9746-88e86b1d3ba2 | Food Shop
 daf41398-3276-45d7-9746-88e86b1d3ba2 | 45ed02f6-c873-46b0-b8e3-68e262f77e4b |  13859 |                  1 | daf41398-3276-45d7-9746-88e86b1d3ba2 | Food Shop
 fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | 5d2179e5-9928-469f-b9da-5829d3d297cd |   2826 |                  0 | fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | Ministry Of Truth
 fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | 45ed02f6-c873-46b0-b8e3-68e262f77e4b |   3151 | 0.3333333333333333 | fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | Ministry Of Truth
 fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | 7a1e6086-89d6-4e7c-8a50-fdc2720ecf4a |   8428 | 0.6666666666666666 | fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | Ministry Of Truth
 fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | 1a84712a-ccf8-4123-9bbe-4a85b91ae01f |  15931 |                  1 | fd354cf0-1db0-4bd0-be7d-a91dbdc74019 | Ministry Of Truth
```

The merchant's that the user spent money with during the time period are selected, then these merchant's total amount across all users are summed for given time period, then user's percentiles are calculated and returned. The application then filters for the expected userId.