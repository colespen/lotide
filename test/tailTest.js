const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("tail", () => {
  let words1 = ["Yo Yo", "Lighthouse", "Lab"];
  const result1 = tail(words1);

  let words2 = ["Lighthouse", "Labs"];
  const result2 = tail(words2);

  let words3 = [];
  const result3 = tail(words3);

  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(result1.length, 2);
  });
  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs'] index [0]", () => {
    assert.strictEqual(result1[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs'] index [1]", () => {
    assert.strictEqual(result1[0], "Lighthouse");
  });

  it("returns 1 for ['Lighthouse', 'Labs'] length", () => {
    assert.strictEqual(result2.length, 1);
  });
  it("returns 'Labs' for ['Lighthouse', 'Labs'] length index [0]", () => {
    assert.strictEqual(result2[0], "Labs");
  });
  it("returns undefined for ['Lighthouse', 'Labs'] index [-1]", () => {
    assert.strictEqual(result2[-1], undefined);
  });

  it("returns 0 for [].length", () => {
    assert.strictEqual(result3.length, 0);
  });
});

// let words = ["Yo Yo", "Lighthouse", "Labs"];
// const result1 = tail(words);
// assertEqual(result1.length, 2);
// assertEqual(result1[0], "Lighthouse");
// assertEqual(result1[1], "Labs");

// let words2 = ["Lighthouse", "Labs"];
// const result2 = tail(words2);
// assertEqual(result2.length, 1);
// assertEqual(result2[0], "Labs");
// assertEqual(result2[-1], undefined);

// let words3 = [];
// const result3 = tail(words3);
// assertEqual(result3.length, 0);