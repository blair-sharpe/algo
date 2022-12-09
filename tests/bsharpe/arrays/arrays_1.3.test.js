const { strictEqual } = require("assert");
const { URLify } = require("../../../solutions/bsharpe/arrays/arrays_1.3.js");

describe("Chapter 1 Arrays: 1.3", function () {
  context("bsharpe", function () {
    context("URLify a string", function () {
      it("should URLify a string", () => {
        const stringToURLify = "this is a piece of text               ";
        const expected = "this20%is20%a20%piece20%of20%text";
        const actual = URLify(stringToURLify);
        strictEqual(actual, expected);
      });
    });
  });
});
