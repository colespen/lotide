const _ = require('../index.js');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: ["2", 3, 4], c: "1" };
_.assertEqual(_.eqObjects(cd, dc), true); // => true
_.assertEqual(_.eqObjects(cd, cd2), false); // => false
_.assertEqual(_.eqObjects(cd2, dc2), true); // => true
_.assertEqual(_.eqObjects(dc, dc2), false); // => false