const { strictEqual } = require("assert");
const {
  maxSlidingWindow,
} = require("../../../solutions/bsharpe/arrays/arrays_1.14.js");

let array = [1, 4, 5, 6, 7, 8, 9, 4, 3, 2, 3, 4, 5];
let k = 3;

describe("Chapter 1 Arrays: 1.14", function () {
  context("bsharpe", function () {
    context("max sub array", function () {
      it("should return max value", function () {
        const expected = 24;
        const actual = maxSlidingWindow(array, k);
        strictEqual(actual, expected);
      });
    });
  });
});
