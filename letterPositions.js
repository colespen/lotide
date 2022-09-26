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

module.exports = letterPositions;