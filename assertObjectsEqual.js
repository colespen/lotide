const eqObjects = require('./eqObjects');
// const _ = require('./index.js');
// not importing correctly from './index.js'

const assertObjectsEqual = function(actual, expected) {
  console.log(_);
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  _.eqObjects(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;
