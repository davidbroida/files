
// had to use google to complete. googled it and found this: https://alexduterte.medium.com/unravelling-the-matrix-array-53e6cad58815

// works perfectfly for the square... however i need to manually run the code line by line to get it to work for the smallerSquare. not sure why? when i run a test in jest i get the same error...


function unroll(squareArray) {

  let newArray = [];

  while (squareArray.length > 0) {
    newArray = [...newArray, squareArray.shift()];
    newArray = [...newArray, squareArray.map(row => row.pop())];
    newArray = [...newArray, squareArray.pop().reverse()];
    newArray = [...newArray, squareArray.map(row => row.shift()).reverse()];
  }

  return newArray.flat();
}

module.exports = unroll;



