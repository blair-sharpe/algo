/**
 * 1.12 Given an integer array nums, return an array answer such that answer[i]
 * is equal to the product of all the elements of nums except nums[i]. The product
 * of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must
 * write an algorithm that runs in O(n) time and without using the division operation.
 * @complexity O(N)
 * @author Blair Sharpe
 */
const productOfAllNumsExceptSelf = (a, pos) => {
  if (a.length === 0) return undefined;
  if (a.length === 1) return 0;
  let pre = [1];
  let suf = [1];
  a.reduce((p, c) => {
    suf.unshift(p * c);
    return p * c;
  }, 1);
  a.reduceRight((p, c) => {
    pre.push(p * c);
    return p * c;
  }, 1);
  return pre[pos] * suf[suf.length - 1 - pos];
};

module.exports = { productOfAllNumsExceptSelf };
