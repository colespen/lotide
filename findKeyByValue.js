const findKeyByValue = function(obj, val) {

  const keys = Object.keys(obj);

  for (const k of keys) {
    if (obj[k] !== val) {
      continue;
    }
    if (obj[k] === val)
      return k;
  }
};

module.exports = findKeyByValue;