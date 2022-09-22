const eqObjects = function(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key in obj1) {
    if (Array.isArray(obj1[key] && obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });

module.exports = { assertObjectsEqual }