const flatten = function(arr) {
  const flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flat.push(arr[i]);
    } else {
      for (const a of arr[i]) {
        flat.push(a);
      }
    }
  }
  return flat;
};

module.exports = flatten;