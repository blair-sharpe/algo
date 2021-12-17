/**
 *1.16 Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 *For example, the array nums = [0,1,2,4,5,6,7] might become:
 *[4,5,6,7,0,1,2] if it was rotated 4 times.
 *[0,1,2,4,5,6,7] if it was rotated 7 times.
 *Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *You must write an algorithm that runs in O(log n) time.
 * @author Blair Sharpe
 * @complexity O(log(N))
 */
const findLargestElementInRotatedArray = (a) => {
  if (a.length === 0) return null;
  if (a.length === 1) return a[0];
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    m = Math.round((l + r) / 2);
    if (a[m] > a[(m + 1) % (a.length - 1)]) return a[m];
    a[l] < a[m] ? (l = m + 1) : (r = m - 1);
  }
};

module.exports = { findLargestElementInRotatedArray };
