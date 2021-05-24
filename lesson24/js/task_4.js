//Определить количество цифр в введенном числе.
const number_1 = +prompt("Enter the number:");
let power = 1;
while (Math.abs(number_1) / 10 ** power >= 1) {
  power++;
}
alert(`The ammount of digits in your number ${number_1} is ${power}`);
