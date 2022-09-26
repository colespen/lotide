const assert = require('chai').assert;
const _ = require('../index.js');

describe("tail", () => {
  let words1 = ["Yo Yo", "Lighthouse", "Lab"];
  const result1 = _.tail(words1);

  let words2 = ["Lighthouse", "Labs"];
  const result2 = _.tail(words2);

  let words3 = [];
  const result3 = _.tail(words3);

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