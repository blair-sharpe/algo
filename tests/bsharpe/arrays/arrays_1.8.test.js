const { deepStrictEqual } = require("assert");
const {
  zeroMatrix,
} = require("../../../solutions/bsharpe/arrays/arrays_1.8.js");

const matrix = [
  [1, 0, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 0, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];

describe("Chapter 1 Arrays: 1.8", function () {
  context("bsharpe", function () {
    context("return matrix zeroed matrix", function () {
      it("Should return zeroed matrix", function () {
        const actual = zeroMatrix(matrix);
        const expected = [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [1, 0, 3, 4, 5, 0, 7, 8],
        ];
        deepStrictEqual(actual, expected);
      });
    });
  });
});
