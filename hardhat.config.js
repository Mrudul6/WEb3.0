
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/zBAV_-L-BEELg99gc_siaepp_8Pf_jl5',
      accounts: ['4d7c0cae810f7d7ddde32d428f201a7a479af43be211b483197a6d0665d99e61'],
    },
  },
};