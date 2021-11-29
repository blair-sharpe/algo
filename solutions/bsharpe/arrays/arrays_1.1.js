/**
 * 1.1 Implement an algorithm to determine if a string has all unique characters. What if you
 * can not use additional data structures?
 *
 * @author Blair Sharpe
 * @complexity O(nLog(n))
 */
const isUniqueWithSort = (s) => {
  if (s.length === 0 || s.length === 1) return true;
  s = s.split("").sort();
  for (let i = 1; i <= s.length - 1; i++) {
    if (s[i] === s[i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * 1.1 Implement an algorithm to determine if a string has all unique characters. What if you
 * can not use additional data structures?
 *
 * @author Blair Sharpe
 * @complexity O(n)
 */
const isUniqueWithHashmap = (s) => {
  let lookup = {};
  if (s.length === 0 || s.length === 1) return true;
  for (let i = 0; i <= s.length - 1; i++) {
    if (lookup[s[i]] === true) return false;
    lookup[s[i]] = true;
  }
  return true;
};

module.exports = { isUniqueWithSort, isUniqueWithHashmap };
