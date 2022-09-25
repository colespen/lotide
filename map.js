const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
};

////  Tests
const words = ["many", "healthy", "almonds", "butters"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "!");
const results3 = map(words, word => word.slice(1, 5));


assertArraysEqual(results1, [ 'm', 'h', 'a', 'b' ]); //=>true
assertArraysEqual(results2, [ 'many!', 'healthy!', 'almonds!', 'butters!' ]); //=>true
assertArraysEqual(results3, [ 'any', 'ealt', 'lmon', 'utte' ]); //=>true