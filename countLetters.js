const countLetters = function(str) {
  str.toLowerCase();
  const obj = {};

  for (const s of str) {
    if (s !== " ") {

      if (!obj[s]) {
        obj[s] = 1;

      } else {
        obj[s] += 1;
      }
    }
  }
  return obj;
};

module.exports = countLetters;