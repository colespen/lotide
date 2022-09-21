const eqArrays = function(a, b) {
  let result = true;
  if (a.length !== b.length) {
    result = false;
  }
  a.forEach((num1, i) => {
    const num2 = b[i];
    if (num1 !== num2) {
      result = false;
    }
  });
  return result;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const letterPositions = function(str) {
  const results = {};
  for (const i in str) {
    if (str[i] === " ") {
      continue;
    }

    if (!results[str[i]]) {
      results[str[i]] = [];
    }

    results[str[i]].push(Number(i));
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("Big Basic basket").B, [0, 4]);
assertArraysEqual(letterPositions("music of the mississippi").s, [ 2, 15, 16, 18, 19 ]);