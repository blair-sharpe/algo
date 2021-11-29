/**
 * 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
 *  other.
 *
 * @author Blair Sharpe
 * @complexity O(n)
 */
const checkPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1.length === 0 && s2.length == 0) return true;
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  let lookup = {};
  for (let i = 0; i <= s1.length; i++) {
    lookup[s1[i]] = true;
  }
  for (let i = 0; i <= s2.length; i++) {
    if (lookup[s2[i]] !== true) return false;
  }
  return true;
};

module.exports = { checkPermutation };
