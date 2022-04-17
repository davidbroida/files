function countZeroes(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      count++
    }
  }
  return count;
}

module.exports = countZeroes