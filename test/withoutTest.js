const _ = require('../index.js');

_.assertArraysEqual(_.without([1, 2, 3], [1]), [2, 3]);
_.assertArraysEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
_.assertArraysEqual(_.without([21, "12", "14.5", 900], ["900", 21, 14.5]), [ '12', '14.5', 900 ]);

const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]);