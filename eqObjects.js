// const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

//Test Function Implementation
const eqObjects = function(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key in obj1) {
    if (Array.isArray(obj1[key] && obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

////  Tests
/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: ["2", 3, 4], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false
assertEqual(eqObjects(cd2, dc2), true); // => true
assertEqual(eqObjects(dc, dc2), false); // => false
*/
module.exports = eqObjects;