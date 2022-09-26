const _ = require('../index.js');

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

_.assertEqual(_.findKey(obj1, x => x.stars === 2), "noma"); // =>true
_.assertEqual(_.findKey(obj1, x => x.stars === 1), "Blue Hill"); // =>true
_.assertEqual(_.findKey(obj1, x => x.stars === 3), "Akaleri"); // =>true
_.assertEqual(_.findKey(obj1, x => x.stars === 5), undefined); // =>true