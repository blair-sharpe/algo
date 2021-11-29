const assert = require("assert");
const isUnique = require("../../../solutions/bsharpe/arrays/arrays_1.1.js");

context("arrays 1.1", function () {
  const uniqueString = "abcd";
  const notUniqueString = "aaaa";
  const emptyString = "";
  it("unique string should return true", function () {
    const expected = true;
    const actual = isUnique(uniqueString);
    assert.strictEqual(actual, expected);
  });
  it("not unique string should return false", function () {
    const expected = false;
    const actual = isUnique(notUniqueString);
    assert.strictEqual(actual, expected);
  });
  it("empty string should return true", function () {
    const expected = true;
    const actual = isUnique(emptyString);
    assert.strictEqual(actual, expected);
  });
});
