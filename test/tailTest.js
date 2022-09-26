const assertEqual = require('../assertEqual');
const tail = require('../tail');

let words = ["Yo Yo", "Lighthouse", "Labs"];
const result1 = tail(words);
assertEqual(result1.length, 2);
assertEqual(result1[0], "Lighthouse");
assertEqual(result1[1], "Labs");

words = ["Lighthouse", "Labs"];
const result2 = tail(words);
assertEqual(result2.length, 1);
assertEqual(result2[0], "Labs");
assertEqual(result2[-1], undefined);

words = [];
const result3 = tail(words);
assertEqual(result3.length, 0);