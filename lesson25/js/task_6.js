// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит
// только те числа из диапазона, которые являются
// совершенными. Используйте написанную ранее функцию,
// чтобы узнавать, совершенное число или нет.
function isPerfectNumber(x) {
  let sumOfDivisors = 0;
  for (let i = 1; i < x; i++) {
    if (x % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors === x;
}
function perfectNumbers(min, max) {
  for (let i = Math.min(min, max); i <= Math.max(min, max); i++) {
    if (isPerfectNumber(i) === true) {
      console.log(`${i} `);
    }
  }
}
