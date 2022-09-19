const {assertEqual} = require('./assertEqual.js');

function head (arr) {
  return arr[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["single"]), "Hello");
assertEqual(head([]), "Hello");