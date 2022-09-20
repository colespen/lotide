function eqArrays(a, b) {
  let result = true;
  if (a.length !== b.length) {
    result = false;
  }
  a.forEach((num1, i) => {
    const num2 = b[i];
    if (num1 !== num2) {
      result = false;
    }
  });
  return result; 
}

function assertArraysEqual(arr1, arr2) {
  eqArrays(arr1, arr2) ? 
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) :
  console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([43, 42, 41], [43, 42, 41]);
assertArraysEqual(["10", "20", "30"], ["10", "20", "30"]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
