var message = require(process.cwd()).message;
var splitOnComma = require(process.cwd()).splitOnComma;
var getEnv = require(process.cwd()).getEnv;

module.exports.config = {
  name: 'getEnvTest',
  sourcePath: 'rules/getEnvTest.js',
  parameters: {
    'testParameter1': {
      'Type': 'String',
      'Description': 'testParameter1'
    },
    'testParamater2': {
      'Type': 'String',
      'Description': 'testParameter2'
    },
    'testParameter3': {
      'Type': 'String',
      'Description': 'testParameter3'
    }
  },
  snsRule: {}
};

module.exports.fn = function(event,callback) {
  var result = {};
  process.env.patrolrulesdiagnosticgetEnvTesttestParameter1 = 1;
  process.env.patrolrulesdiagnosticgetEnvTesttestParameter2 = 2;
  process.env.patrolrulesdiagnosticgetEnvTesttestParameter3 = 3;
  result.testParameter1 = getEnv('testParameter1');
  result.testParameter2 = getEnv('testParameter2');
  result.testParameter3 = getEnv('testParameter3');
  callback(null,result);
};
