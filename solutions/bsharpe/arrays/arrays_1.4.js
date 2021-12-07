/**
 * 1.4 Palindrome Permutation: Given a string, write a function to check
 * if it is a permutation of a palindrome. A palindrome is a word or phrase
 * that is the same forwards and backwards. A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE Input: Tact Coa Output: True (permutations: "taco cat". "atco cta". etc.)
 *
 * @author Blair Sharpe
 * @complexity O(N)
 */
const palindromePermutation = (s) => {
  if (s.length === 0 || s.length == 1) return true;
  let h = {};
  let o = 0;
  s = s
    .toLowerCase()
    .split("")
    .filter((l) => l !== " ");
  s.forEach((l) => (l in h ? h[l]++ : (h[l] = 1)));
  Object.values(h).forEach((n) => {
    if (n % 2 !== 0) o++;
  });
  if (s.length % 2 === 0 && o > 0) return false;
  if (s.length % 2 !== 0 && o > 1) return false;
  return true;
};

module.exports = { palindromePermutation };
