const takeUntil = (array, callBack) => {
  const arr = [];

  for (const a of array) {
    if (callBack(a)) {
      break;
    }
    if (!callBack(a)) {
      arr.push(a);
    }
  }
  
  return arr;
};

module.exports = takeUntil;

