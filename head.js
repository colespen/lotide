const assertEqual = require('./assertEqual');

const head = (arr) => arr[0];

////  Tests
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["single"]), "Hello"); // => false
assertEqual(head([]), "Hello"); // => false
