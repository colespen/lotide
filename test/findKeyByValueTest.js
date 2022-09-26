const _ = require('../index.js');

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //=> true
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //=> true
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //=> true
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //=> true