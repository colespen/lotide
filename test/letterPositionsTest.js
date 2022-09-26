const _ = require('../index.js');

_.assertArraysEqual(_.letterPositions("hello").e, [1]);
_.assertArraysEqual(_.letterPositions("lighthouse in the house").o, [6, 19]);
_.assertArraysEqual(_.letterPositions("Big Basic basket").B, [0, 4]);
_.assertArraysEqual(_.letterPositions("music of the mississippi").s, [ 2, 15, 16, 18, 19 ]);