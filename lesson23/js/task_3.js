// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const number = +prompt("Enter your threedigit number:");
let thirdDigit = number % 10;
let secondDigit = ((number % 100) - thirdDigit) / 10;
let firstDigit = (number - (number % 100)) / 100;

if (number < 100 || number > 999) {
  alert("Please, enter positive threedigit number after reloading the page!!!");
  throw new Error("Are you fool?!! This is taught in the third grade!!!");
}
if (
  thirdDigit === secondDigit ||
  secondDigit === firstDigit ||
  firstDigit === thirdDigit
) {
  alert(`Your number ${number} has the same digits`);
} else {
  alert(`Your number ${number} has not the same digits`);
}
