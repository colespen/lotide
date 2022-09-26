const _ = require('../index.js');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');

const data3 = [1, 3, 9, 131, 11, 20, 220, 448, 1000];
const results3 = _.takeUntil(data3, x => x % 2 === 0);


_.assertArraysEqual(results1, [1, 2, 5, 7, 2]); //=true
_.assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); //=true
_.assertArraysEqual(results3, [1, 3, 9, 131, 11]); //=true
