// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const number5 = +prompt("Enter fivedigit number:");
let firstDigit = Math.floor(number5 / 10000);
let secondDigit = Math.floor(number5 / 1000) - 10 * firstDigit;
let thirdDigit =
  Math.floor(number5 / 100) - (100 * firstDigit + 10 * secondDigit);
let fourthDigit =
  Math.floor(number5 / 10) -
  (1000 * firstDigit + 100 * secondDigit + 10 * thirdDigit);
let fifthDigit =
  number5 -
  (10000 * firstDigit +
    1000 * secondDigit +
    100 * thirdDigit +
    10 * fourthDigit);
if (firstDigit === 0 || number5 < 10000 || number5 > 99999) {
  alert(
    "Please, enter fivedigit positive number without first digit 0 after reloading the page!!!"
  );
  throw new Error("Are you fool?!! This is taught in the third grade!!!");
}
if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
  alert(`Your number is palindrom!`);
} else {
  alert(`Your number is not palindrom!`);
}
