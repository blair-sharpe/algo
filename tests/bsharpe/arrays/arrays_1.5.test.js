const { strictEqual } = require("assert");
const { oneAway } = require("../../../solutions/bsharpe/arrays/arrays_1.5");

const baseString = "abcdefg";

describe("Chapter 1 Arrays: 1.5", function () {
  context("bsharpe", function () {
    context("check if two strings are one away", function () {
      it("should be true if same length and one away", function () {
        const oneAwayDifferentLength = "abcdefd";
        const expected = true;
        const actual = oneAway(baseString, oneAwayDifferentLength);
        strictEqual(actual, expected);
      });
      it("should be false if same length and not one away", function () {
        const notOneAwayDifferentLength = "abcdeaa";
        const expected = false;
        const actual = oneAway(baseString, notOneAwayDifferentLength);
        strictEqual(actual, expected);
      });
      it("should be true if different length and one away", function () {
        const notOneAwayDifferentLength = "abcdeefg";
        const expected = true;
        const actual = oneAway(baseString, notOneAwayDifferentLength);
        strictEqual(actual, expected);
      });
      it("should be false if different length and not one away", function () {
        const notOneAwayDifferentLength = "abcdasg";
        const expected = false;
        const actual = oneAway(baseString, notOneAwayDifferentLength);
        strictEqual(actual, expected);
      });
      it("should be false if different length and not one away switched inputs", function () {
        const notOneAwayDifferentLength = "abcdasg";
        const expected = false;
        const actual = oneAway(notOneAwayDifferentLength, baseString);
        strictEqual(actual, expected);
      });
      it("should be false if more than one difference in length", function () {
        const bigLengthDifferenceString = "abd123567asdfasdf";
        const expected = false;
        const actual = oneAway(baseString, bigLengthDifferenceString);
        strictEqual(actual, expected);
      });
      it("first string is null", function () {
        const bigLengthDifferenceString = "abd123567asdfasdf";
        const expected = false;
        const actual = oneAway(null, bigLengthDifferenceString);
        strictEqual(actual, expected);
      });
      it("second string is null", function () {
        const expected = false;
        const actual = oneAway(baseString, null);
        strictEqual(actual, expected);
      });
    });
  });
});
