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

const words = ["many", "healthy", "almonds", "butters"];

//higher-order function
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  
};


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word + "!");
console.log(results2);

const results3 = map(words, word => word.slice(1, 5));
console.log(results3);


assertArraysEqual(results1, [ 'm', 'h', 'a', 'b' ]); //=>true

assertArraysEqual(results2, [ 'many!', 'healthy!', 'almonds!', 'butters!' ]); //=>true

assertArraysEqual(results3, [ 'any', 'ealt', 'lmon', 'utte' ]); //=>true