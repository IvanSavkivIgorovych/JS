//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const minNumber = +prompt("Enter the smaller number number:");
const maxNumber = +prompt("Enter the bigger number number:");
if (minNumber >= maxNumber) {
  alert("Please, enter the correct numbers");
} else {
  alert(`The sum of all numbers from ${minNumber} to ${maxNumber} is ${sum}.`);
}
let sum = 0;
let i = minNumber;
while (i <= maxNumber) {
  sum += i;
  i++;
}
