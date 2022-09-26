const _ = require('../index.js');

const result1 = JSON.stringify(_.countLetters("climb the wall well"));
const result2 = JSON.stringify(_.countLetters("lighthouse in the house"));
const result3 = JSON.stringify(_.countLetters("Bumping BIG Beats"));

const expected1 = JSON.stringify(
  { c: 1, l: 5, i: 1, m: 1, b: 1, t: 1, h: 1, e: 2, w: 2, a: 1 }
);
const expected2 = JSON.stringify(
  { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
);
const expected3 = JSON.stringify(
  { B: 3, u: 1, m: 1, p: 1, i: 1, n: 1, g: 1, I: 1, G: 1, e: 1, a: 1, t: 1, s: 1 }
);

_.assertEqual(result1, expected1);

_.assertEqual(result2, expected2);

_.assertEqual(result3, expected3);