// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.
const zeroMatrix = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const rowLookup = {};
  const colLookup = {};
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const element = matrix[row][col];
      if (element === 0) {
        rowLookup[row] = true;
        colLookup[col] = true;
      }
    }
  }
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (rowLookup[row] || colLookup[col]) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
};

module.exports = { zeroMatrix };
