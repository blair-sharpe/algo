const assert = require("assert");
const {
  isUniqueWithSort,
  isUniqueWithHashmap,
} = require("../../../solutions/bsharpe/arrays/arrays_1.1.js");

describe("Chapter 1 Arrays: 1.1", function () {
  context("bsharpe", function () {
    const uniqueString = "abcd";
    const notUniqueString = "aaaab";
    const singleLetter = "b";
    const emptyString = "";
    context("find if unique string with sort", function () {
      it("unique string should return true", function () {
        const expected = true;
        const actual = isUniqueWithSort(uniqueString);
        assert.strictEqual(actual, expected);
      });
      it("not unique string should return false", function () {
        const expected = false;
        const actual = isUniqueWithSort(notUniqueString);
        assert.strictEqual(actual, expected);
      });
      it("empty string should return true", function () {
        const expected = true;
        const actual = isUniqueWithSort(emptyString);
        assert.strictEqual(actual, expected);
      });
      it("single letter should return true", function () {
        const expected = true;
        const actual = isUniqueWithSort(singleLetter);
        assert.strictEqual(actual, expected);
      });
    });
    context("find if unique string with hashmap", function () {
      it("unique string should return true", function () {
        const expected = true;
        const actual = isUniqueWithHashmap(uniqueString);
        assert.strictEqual(actual, expected);
      });
      it("not unique string should return false", function () {
        const expected = false;
        const actual = isUniqueWithHashmap(notUniqueString);
        assert.strictEqual(actual, expected);
      });
      it("empty string should return true", function () {
        const expected = true;
        const actual = isUniqueWithHashmap(emptyString);
        assert.strictEqual(actual, expected);
      });
      it("single letter should return true", function () {
        const expected = true;
        const actual = isUniqueWithHashmap(singleLetter);
        assert.strictEqual(actual, expected);
      });
    });
  });
});
