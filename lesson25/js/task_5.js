// Написать функцию, которая проверяет, является
// ли переданное ей число совершенным. Совершенное
// число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber(x) {
  let sumOfDivisors = 0;
  for (let i = 1; i < x; i++) {
    if (x % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors === x;
}
