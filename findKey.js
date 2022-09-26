const findKey = (obj, callback) => {
  for (const o in obj) {
    if (callback(obj[o])) {
      return o;
    }
  }
};

module.exports = findKey;