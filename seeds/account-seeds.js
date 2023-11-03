const { Account } = require('../models');

const accountData = [
  {
    username: 'accountOne',
    password: 'alpha1',
  },
  {
    username: 'accountTwo',
    password: 'alpha2',
  },
  {
    username: 'accountThree',
    password: 'alpha3',
  },
];

const seedAccounts = () => Account.bulkCreate(accountData);

module.exports = seedAccounts;
