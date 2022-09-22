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

const takeUntil = (array, callBack) => {
  const arr = [];
  for (const a of array) {
    if (callBack(a)) {
      break;
    }
    if (!callBack(a)) {
      arr.push(a);
    }
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1, 3, 9, 131, 11, 20, 220, 448, 1000];
const results3 = takeUntil(data3, x => x % 2 === 0);
console.log(results3);

assertArraysEqual(results1, [1, 2, 5, 7, 2]); //=true
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); //=true
assertArraysEqual(results3, [1, 3, 9, 131, 11]); //=true
