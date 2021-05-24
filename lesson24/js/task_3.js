//Запросить у пользователя число и вывести все делители этого числа.
const number = +prompt("Enter the number:");
let allDivisors = ``;
for (let j = 1; j <= Math.abs(number); j++) {
  if (Math.abs(number) % j === 0) {
    allDivisors += ` ${j}`;
  }
}
console.log(`All divisors of a number ${number} is ${allDivisors}`);
