const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, val) {

  keys = Object.keys(obj);

  for (const k of keys) {
    if (obj[k] !== val) {
      undefined;
    } 
    if (obj[k] === val)
    return k;
    }
  }


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);




// const findKeyByValue = function(obj, val) {
//   let str = "";
//   for (const o in obj) {
//     if (obj[o] === val) {
//       str += o;
//     } else {
//     }
//   }
//   return str;
// };