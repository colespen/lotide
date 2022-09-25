const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {

  const keys = Object.keys(obj);

  for (const k of keys) {
    if (obj[k] !== val) {
      continue;
    }
    if (obj[k] === val)
      return k;
  }
};

////  Tests
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //=> true
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //=> true
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //=> true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //=> true