// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const number5 = +prompt("Enter fivedigit number:");
firstDigit = Math.floor(number5 / 10000);
secondDigit = Math.floor(number5 / 1000) - 10 * firstDigit;
thirdDigit = Math.floor(number5 / 100) - (100 * firstDigit + 10 * secondDigit);
fourthDigit =
  Math.floor(number5 / 10) -
  (1000 * firstDigit + 100 * secondDigit + 10 * thirdDigit);
fifthDigit =
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
