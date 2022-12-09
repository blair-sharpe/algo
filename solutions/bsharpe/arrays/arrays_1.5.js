const { first } = require("git-cz");

/**
 * 1.5
 * 1.5 One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 *one edit (or zero edits) away.
 *EXAMPLE
 *pale. bale -> true
 *pale. bake -> false

 *pales. pale -> true
 *pale, ple -> true
 *pale, pale -> true
 *
 * @author Blair Sharpe
 * @complexity O(N)
 */
const oneAway = (s1, s2) => {
  let firstPointer = 0;
  let secondPointer = 0;
  let edits = 0;
  if (s1 === null || s2 === null) return false;
  if (Math.abs(s1.length - s2.length) > 1) return false;
  if (s1.length === s2.length) {
    while (firstPointer !== s1.length && secondPointer !== s2.length) {
      if (s1[firstPointer] !== s2[secondPointer]) edits++;
      firstPointer++;
      secondPointer++;
    }
  } else {
    let shorterString = s1.length > s2.length ? s2 : s1;
    let longerString = s1.length > s2.length ? s1 : s2;
    while (
      firstPointer < shorterString.length &&
      secondPointer < longerString.length
    ) {
      if (shorterString[firstPointer] !== longerString[secondPointer]) {
        edits++;
        secondPointer++;
      } else {
        secondPointer++;
        firstPointer++;
      }
    }
  }
  return edits > 1 ? false : true;
};

module.exports = { oneAway };
