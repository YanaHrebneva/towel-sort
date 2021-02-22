
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return []}
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i].reverse()
    }
  }
  let arr = matrix.reduce((acc, val) => acc.concat(val), [])
  return arr;
}
