var lambdaCfn = require('../../');

module.exports = lambdaCfn(
  [
    'test/rules/dummyRole.js'
  ],
  {
    "AWSTemplateFormatVersion": "2010-09-09",
    "Description": "patrol"
  }
);
