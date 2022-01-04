/**
 * 1.10  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *You can return the answer in any order.
 * @complexity O(N)
 * @author Blair Sharpe
 */
const findIndicesForTarget = (a, t) => {
  if (a.length === 0) return false;
  if (a.length === 1) return false;
  let m = {};
  m[a[0]] = 0;
  for (let i = 1; i < a.length; i++) {
    let l = t - a[i];
    if (l in m) return [i, m[l]];
    m[a[i]] = i;
  }
  return false;
};

module.exports = { findIndicesForTarget };
