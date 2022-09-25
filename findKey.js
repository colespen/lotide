const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (const o in obj) {
    if (callback(obj[o])) {
      return o;
    }
  }
};

////  Tests
const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj1, x => x.stars === 2), "noma"); // =>true
assertEqual(findKey(obj1, x => x.stars === 1), "Blue Hill"); // =>true
assertEqual(findKey(obj1, x => x.stars === 3), "Akaleri"); // =>true
assertEqual(findKey(obj1, x => x.stars === 5), undefined); // =>true