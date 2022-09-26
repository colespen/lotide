const without = function(source, itemRemove) {
  const toRemove = new Set(itemRemove);
  const newArr = source.filter((item) => {
    return !toRemove.has(item);
  });
  return newArr;
};

module.exports = without;