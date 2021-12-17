const { strictEqual } = require("assert");
const {
  findTargetInRotatedArray,
} = require("../../../solutions/bsharpe/arrays/arrays_1.10.js");

const emptyArray = [];
let sortedArray = [1, 2, 3, 4, 5];
const target = 4;
const invalidTarget = 100;

describe("Chapter 1 Arrays: 1.10", function () {
  context("bsharpe", function () {
    context("find target in rotated array", function () {
      it("Should return index of target when searching", function () {
        let actual;
        let expected;
        for (let i = 0; i <= sortedArray.length - 1; i++) {
          sortedArray.unshift(sortedArray.pop());
          expected = sortedArray.indexOf(target);
          actual = findTargetInRotatedArray(sortedArray, target);
          strictEqual(actual, expected);
        }
      });
      it("should return -1 for non existing target", function () {
        const expected = -1;
        const actual = findTargetInRotatedArray(sortedArray, invalidTarget);
        strictEqual(actual, expected);
      });
      it("should return -1 for empty array", function () {
        const expected = -1;
        const actual = findTargetInRotatedArray(emptyArray, target);
        strictEqual(actual, expected);
      });
    });
  });
});
