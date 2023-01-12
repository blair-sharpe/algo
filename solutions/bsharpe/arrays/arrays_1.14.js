// 1.14 You are given an array of integers nums, there is a sliding window of size k
// which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

const maxSlidingWindow = (values, k = 3) => {
  const preComputationLookup = [0];
  let runningSum = 0;
  for (let i = 0; i < values.length; i++) {
    runningSum = runningSum + values[i];
    preComputationLookup.push(runningSum);
  }
  let largest = 0;
  let firstPointer = 0;
  let secondPointer = k;
  while (secondPointer !== preComputationLookup.length - 1) {
    const windowCalculation =
      preComputationLookup[secondPointer] - preComputationLookup[firstPointer];
    if (windowCalculation > largest) {
      largest = windowCalculation;
    }
    firstPointer++;
    secondPointer++;
  }
  return largest;
};

module.exports = { maxSlidingWindow };
