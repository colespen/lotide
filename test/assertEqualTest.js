const _ = require('../index.js');

_.assertEqual("Lighthouse Labs", "Bootcamp");//<=false
_.assertEqual(1, 1);//<=true
_.assertEqual("hungry?", "hunger");//<=false
_.assertEqual("identity", "identity");//<=true
_.assertEqual(323, 33.3);//<=false
_.assertEqual(33.3, 33.3);//<=true

