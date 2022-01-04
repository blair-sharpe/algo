const { strictEqual, deepStrictEqual } = require("assert");
const {
  findIndicesForTarget,
} = require("../../../solutions/bsharpe/arrays/arrays_1.10.js");

const emptyArr = [];
const arr = [1, 2, 3, 4, 5];
const singleElementArr = [1];
const target = 4;
const invalidTarget = 100;

describe("Chapter 1 Arrays: 1.10", function () {
  context("bsharpe", function () {
    context("find two indices that add to target", function () {
      it("Should return two indices that add up to a target", function () {
        const expected = [2, 0];
        const actual = findIndicesForTarget(arr, target);
        deepStrictEqual(actual, expected);
      });
      it("Should return false for invalid target", function () {
        const expected = false;
        const actual = findIndicesForTarget(arr, invalidTarget);
        strictEqual(actual, expected);
      });
      it("Should return false for empty array", function () {
        const expected = false;
        const actual = findIndicesForTarget(emptyArr, target);
        strictEqual(actual, expected);
      });
      it("Should return false for only a single element in array", function () {
        const expected = false;
        const actual = findIndicesForTarget(singleElementArr, target);
        strictEqual(actual, expected);
      });
    });
  });
});
