const { strictEqual } = require("assert");
const {
  productOfAllNumsExceptSelf,
} = require("../../../solutions/bsharpe/arrays/arrays_1.12.js");

const arrayOfNumbers = [1, 2, 3, 4, 5];
const singleNumberArray = [3];
const twoNumbersArray = [1, 3];
const emptyArray = [];

describe("Chapter 1 Arrays: 1.12", function () {
  context("bsharpe", function () {
    context("find product of all numbers except itself", function () {
      it("should return product of all numbers except itself", function () {
        const expected = 40;
        const actual = productOfAllNumsExceptSelf(arrayOfNumbers, 2);
        strictEqual(actual, expected);
      });
      it("should return product of all numbers except itself for two elements", function () {
        const expected = 1;
        const actual = productOfAllNumsExceptSelf(twoNumbersArray, 0);
        strictEqual(actual, expected);
      });
      it("should return 0 for only a single element", function () {
        const expected = 0;
        const actual = productOfAllNumsExceptSelf(singleNumberArray, 0);
        strictEqual(actual, expected);
      });
      it("should return undefined for empty array", function () {
        const expected = undefined;
        const actual = productOfAllNumsExceptSelf(emptyArray, 0);
        strictEqual(actual, expected);
      });
    });
  });
});
