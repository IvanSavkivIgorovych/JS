// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(x) {
  let product = 1;
  for (let i = 1; i <= x; i++) {
    product *= i;
  }
  return product;
}
