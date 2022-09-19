const {assertEqual} = require('./assertEqual.js');

const head = (arr) => arr[0];

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["single"]), "Hello");
assertEqual(head([]), "Hello");

