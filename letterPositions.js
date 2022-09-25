const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(str) {
  const results = {};
  for (const i in str) {
    const letter = str[i];
    if (letter === " ") {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(Number(i));
  }
  return results;
};

////  Tests
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(letterPositions("Big Basic basket").B, [0, 4]);
assertArraysEqual(letterPositions("music of the mississippi").s, [ 2, 15, 16, 18, 19 ]);