function findFloor(array, target) {
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] <= target) return array[i];
  } return -1;
}

module.exports = findFloor