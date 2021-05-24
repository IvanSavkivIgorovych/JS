// Запросить у пользователя 10 чисел и подсчитать,
// сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно
// одной переменной (не 10) для ввода чисел пользователем.
let number_3 = 0;
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
let odd = 0;
let even = 0;
for (let j = 1; j <= 10; j++) {
  number_3 = +prompt("Enter the number:");

  if (number_3 > 0) {
    positiveNumber++;
  } else if (number_3 < 0) {
    negativeNumber++;
  } else {
    zero++;
  }

  if (number_3 % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
alert(
  `You have entered ${positiveNumber} positive numbers, ${negativeNumber} negative numbers, ${zero} zeros, ${even} even numbers, ${odd} odd numbers.`
);
