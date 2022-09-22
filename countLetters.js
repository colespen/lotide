const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(str) {
  str.toLowerCase();
  const obj = {};
  for (s of str) {
    if (s !== " ") {
      if (!obj[s]) {
        obj[s] = 1;
      } else {
        obj[s] += 1;
      }
    }
  }
  return obj;
}

result1 = JSON.stringify(countLetters("climb the wall well"));
result2 = JSON.stringify(countLetters("lighthouse in the house"));
result3 = JSON.stringify(countLetters("Bumping BIG Beats"));

assertEqual(result1, JSON.stringify({ c: 1, l: 5, i: 1, m: 1, b: 1, t: 1, h: 1, e: 2, w: 2, a: 1 }));

assertEqual(result2, JSON.stringify({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }));

assertEqual(result3, JSON.stringify({ B: 3, u: 1, m: 1, p: 1, i: 1, n: 1, g: 1, I: 1, G: 1, e: 1, a: 1, t: 1, s: 1 }));