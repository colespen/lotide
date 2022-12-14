const eqArrays = function(a, b) {
  let result = true;
  if (a.length !== b.length) {
    result = false;
  }
  a.forEach((el1, i) => {
    const el2 = b[i];
    if (el1 !== el2) {
      result = false;
    }
  });
  return result;
};

module.exports = eqArrays;