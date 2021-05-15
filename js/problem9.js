let threeDigitNumber = +prompt("Enter a three digit number:");
let thirdDigit = threeDigitNumber % 10;
let secondDigit = ((threeDigitNumber % 100) - thirdDigit) / 10;
let firstDigit = (threeDigitNumber - (threeDigitNumber % 100)) / 100;
let revertNumber = alert(
  `Your revert number wiil be: ${
    thirdDigit * 100 + secondDigit * 10 + firstDigit
  }`
);
