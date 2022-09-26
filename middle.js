const middle = function(array) {
  array.splice(0, 1);
  array.splice(-1, 1);
  if (array.length % 2 === 0) {
    while (array.length > 2) {
      array.splice(0, 1);
      array.splice(-1, 1);
    }
  } else if (array.length > 1) {
    array.splice(0, 1);
    array.splice(-1, 1);
  }
  return array;
};

module.exports = middle;