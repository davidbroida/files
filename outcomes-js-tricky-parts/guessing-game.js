function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let count = 0;
  let hasWon = false;

  return function guess(num) {

    if (hasWon) return ('Stop guessing.. you already won!');
    count++;

    if (num === answer) {
      hasWon = true;
      const guess = count === 1 ? "guess" : "guesses";
      return (`Congratulations! You found the number ${num} in ${count} guesses!`);
    }

    if (num < answer) return (`${num} is too low. Guess higher!`);
    if (num > answer) return (`${num} is too high. Guess lower!`);
  }
}
module.exports = { guessingGame };
