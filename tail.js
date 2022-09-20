const {assertEqual} = require('./assertEqual.js');

const tail = (arr) => {
  console.log(arr.slice(1));
};

// Test Case: check original array

let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

words = ["Labs"];
tail(words);
assertEqual(words.length, 3);

words = [];
tail(words);
assertEqual(words.length, 3);

