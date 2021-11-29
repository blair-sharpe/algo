const assert = require("assert");
const {
  checkPermutation,
} = require("../../../solutions/bsharpe/arrays/arrays_1.2.js");

const originalString = "THISIS";
const permutatedString = "HIISST";
const randomStringSameLength = "asdfes";
const stringWithDifferentLength = "HSST";
const permutatedStringLowerCases = "HiIsST";
const emptyString = "";

describe("Chapter 1 Arrays: 1.2", function () {
  context("check if two strings are permutations of eachother", function () {
    it("should return true for a permutated string", function () {
      const expected = true;
      const actual = checkPermutation(originalString, permutatedString);
      assert.strictEqual(actual, expected);
    });
    it("should return true for a permutated string with lower case characters", function () {
      const expected = true;
      const actual = checkPermutation(
        originalString,
        permutatedStringLowerCases
      );
      assert.strictEqual(actual, expected);
    });
    it("should return false for a permutated string with different lengths", function () {
      const expected = false;
      const actual = checkPermutation(
        originalString,
        stringWithDifferentLength
      );
      assert.strictEqual(actual, expected);
    });
    it("should return false for string with different characters", function () {
      const expected = false;
      const actual = checkPermutation(originalString, randomStringSameLength);
      assert.strictEqual(actual, expected);
    });
    it("should return true for two empty strings", function () {
      const expected = true;
      const actual = checkPermutation(emptyString, emptyString);
      assert.strictEqual(actual, expected);
    });
  });
});
