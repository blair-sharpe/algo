/**
 * 1.1 Implement an algorithm to determine if a string has all unique characters. What if you
 * can not use additional data structures?
 *
 * @author Blair Sharpe
 * @complexity nLog(n)
 */
module.exports = isUnique = (s) => {
  if (s.length === 0 || s.length === 1 || s === null) {
    return true;
  }
  s = s.split("").sort();
  for (let i = 1; i <= s.length - 1; i++) {
    if (s[i] === s[i - 1]) {
      return false;
    }
  }
  return true;
};
