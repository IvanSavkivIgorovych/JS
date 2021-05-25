//Запросить 2 числа и найти только наибольший общий делитель.
const firstNumber = +prompt("Enter the first number:");
const secondNumber = +prompt("Enter the second number:");
const minOfNumbers = Math.min(Math.abs(firstNumber), Math.abs(secondNumber));
let commonDivisor = 1;
for (let j = minOfNumbers; j >= 1; j--) {
  if (Math.abs(firstNumber) % j === 0 && Math.abs(secondNumber) % j === 0) {
    commonDivisor = j;
  }
}
alert(
  `The largest common divisor of numbers ${firstNumber} and ${secondNumber} is ${commonDivisor}`
);
