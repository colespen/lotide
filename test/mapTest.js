const _ = require('../index.js');

const words = ["many", "healthy", "almonds", "butters"];
const results1 = _.map(words, word => word[0]);
const results2 = _.map(words, word => word + "!");
const results3 = _.map(words, word => word.slice(1, 5));


_.assertArraysEqual(results1, [ 'm', 'h', 'a', 'b' ]); //=>true
_.assertArraysEqual(results2, [ 'many!', 'healthy!', 'almonds!', 'butters!' ]); //=>true
_.assertArraysEqual(results3, [ 'any', 'ealt', 'lmon', 'utte' ]); //=>true