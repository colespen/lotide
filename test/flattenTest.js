const _ = require('../index.js');
//  Tests
const arr1a = [1, 2, [3, 4], 5, [6]];
const arr1b = [1, 2, 3, 4, 5, 6];
const arr2a = [1, [2, 4, 6, 4, 2], 3, 4, 5, 6, [33, 2, -6, 2.4], 9];
const arr2b = [1, 2, 4, 6, 4, 2, 3, 4, 5, 6, 33, 2, -6, 2.4, 9];

_.assertArraysEqual(_.flatten(arr1a), arr1b);

_.assertArraysEqual(_.flatten(arr2a), arr2b);