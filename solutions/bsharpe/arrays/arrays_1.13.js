/**
 * 1.13 There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the
 * possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * @author Blair Sharpe
 * @complexity O(Log(N))
 */
const findTargetInRotatedArray = (a, t) => {
  let l = 0;
  let r = a.length - 1;
  let m;
  while (l <= r) {
    m = Math.round((l + r) / 2);
    if (t === a[m]) return m;
    if (a[l] < a[m]) {
      a[l] <= t && a[m] > t ? (r = m - 1) : (l = m + 1);
    } else {
      a[m] < t && a[r] >= t ? (l = m + 1) : (r = m - 1);
    }
  }
  return -1;
};

module.exports = { findTargetInRotatedArray };
