const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");//<=false
assertEqual(1, 1);//<=true
assertEqual("hungry?", "hunger");//<=false
assertEqual("identity", "identity");//<=true
assertEqual(323, 33.3);//<=false
assertEqual(33.3, 33.3);//<=true