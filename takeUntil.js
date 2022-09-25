const assertArraysEqual = require('./assertArraysEqual');

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

////  Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [1, 3, 9, 131, 11, 20, 220, 448, 1000];
const results3 = takeUntil(data3, x => x % 2 === 0);


assertArraysEqual(results1, [1, 2, 5, 7, 2]); //=true
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); //=true
assertArraysEqual(results3, [1, 3, 9, 131, 11]); //=true

