const _ = require('../index.js');

_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
_.assertEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);

_.assertEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
_.assertEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);