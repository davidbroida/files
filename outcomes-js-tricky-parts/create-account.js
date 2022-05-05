function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return 'Invalid PIN.';
      return `Your current balance is: $${amount}`;
    },

    deposit(inputPin, depositAmount) {
      if (inputPin !== pin) return 'Invalid PIN.';
      amount += depositAmount;
      return `Successfully deposited ${depositAmount}! Your new balance is: $${amount}.`
    },

    withdraw(inputPin, withdrawlAmount) {
      if (inputPin !== pin) return 'Invalid PIN.';
      if (withdrawlAmount > amount) return 'Withdrawl amount exceeds current balance.'
      amount -= withdrawlAmount;
      return `$${withdrawlAmount} withdrawl successful! Your current balance is now: $${amount}.`
    },

    changePin(inputPin, newPin) {
      if (inputPin !== pin) return 'Invalid PIN.';
      pin = newPin;
      return 'PIN successfully changed!';
    }
  };
}

module.exports = { createAccount };
