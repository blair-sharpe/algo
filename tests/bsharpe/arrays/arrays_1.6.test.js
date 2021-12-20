const { strictEqual } = require("assert");
const {
  stringCompression,
} = require("../../../solutions/bsharpe/arrays/arrays_1.6.js");

const emptyString = "";
const nonCompressibleString = "ab";
const stringOfRepeatingCharacters = "aabcccccaaa";

describe("Chapter 1 Arrays: 1.6", function () {
  context("bsharpe", function () {
    context("compress string of repeating characters", function () {
      it("should compress a string with multiple letters", function () {
        const expected = "a2b1c5a3";
        const actual = stringCompression(stringOfRepeatingCharacters);
        console.log(actual);
        strictEqual(actual, expected);
      });
      it("should return same string if compressed is same length", function () {
        const expected = nonCompressibleString;
        const actual = stringCompression(nonCompressibleString);
        strictEqual(actual, expected);
      });
      it("should return empty string if empty string", function () {
        const expected = emptyString;
        const actual = stringCompression(emptyString);
        strictEqual(actual, expected);
      });
    });
  });
});
