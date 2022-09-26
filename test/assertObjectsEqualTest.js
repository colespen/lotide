const _ = require('../index.js');

const abc = { a: 1, b: 2, c: 3 }
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: ["2", 3, 4], c: "1" };

_.assertObjectsEqual(abc, abc);
_.assertObjectsEqual(cd, dc);
_.assertObjectsEqual(cd2, dc2);