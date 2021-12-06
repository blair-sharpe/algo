const { strictEqual } = require("assert");
const {
  palindromePermutation,
} = require("../../../solutions/bsharpe/arrays/arrays_1.4.js");

const emptyString = "";
const singleLetter = "B";
const permutatedPalindromeOddLength = "x zx";
const permutatedPalindromeEvenLength = "88 11";
const nonPalindromeStringOdd = "abc";
const nonPalindromeStringEven = "88 12";

describe("Chapter 1 Arrays: 1.4", function () {
  context("bsharpe", function () {
    context("check for permutated palindromes ", function () {
      it("should return true for a even lengthed permutated palindrome", function () {
        const expected = true;
        const actual = palindromePermutation(permutatedPalindromeEvenLength);
        strictEqual(actual, expected);
      });
      it("should return false for a even lengthed non palindrome permutated ", function () {
        const expected = false;
        const actual = palindromePermutation(nonPalindromeStringEven);
        strictEqual(actual, expected);
      });
      it("should return true for a odd lengthed permutated palindrome", function () {
        const expected = true;
        const actual = palindromePermutation(permutatedPalindromeOddLength);
        strictEqual(actual, expected);
      });
      it("should return false for a non palindrome permutated of odd length", function () {
        const expected = false;
        const actual = palindromePermutation(nonPalindromeStringOdd);
        strictEqual(actual, expected);
      });
      it("should return true for a single letter", function () {
        const expected = true;
        const actual = palindromePermutation(singleLetter);
        strictEqual(actual, expected);
      });
      it("should return true for empty string", function () {
        const expected = true;
        const actual = palindromePermutation(emptyString);
        strictEqual(actual, expected);
      });
    });
  });
});
