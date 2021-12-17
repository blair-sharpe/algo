const { strictEqual } = require("assert");
const {
  findLargestElementInRotatedArray,
} = require("../../../solutions/bsharpe/arrays/arrays_1.16.js");

let sortedArray = [1, 2, 3, 4, 5];
const singleElement = [3];
const emptyArray = [];

describe("Chapter 1 Arrays: 1.16", function () {
  context("bsharpe", function () {
    context("find largest element in rotated array", function () {
      it("Should return max element in rotated arrays", function () {
        let actual;
        const expected = 5;
        for (let i = 0; i <= sortedArray.length - 1; i++) {
          sortedArray.unshift(sortedArray.pop());
          actual = findLargestElementInRotatedArray(sortedArray);
          strictEqual(actual, expected);
        }
      });
      it("Should return single element when finding max in a single element array", function () {
        const expected = 3;
        const actual = findLargestElementInRotatedArray(singleElement);
        strictEqual(actual, expected);
      });
      it("should return null for empty array", function () {
        const expected = null;
        const actual = findLargestElementInRotatedArray(emptyArray);
        strictEqual(actual, expected);
      });
    });
  });
});
