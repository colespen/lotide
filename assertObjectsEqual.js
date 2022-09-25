const eqObjects = require('./eqObjects');

//Test Function Implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

////  Tests
assertObjectsEqual(
  { a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: ["2", 3, 4], c: "1" };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd2, dc2);