// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.
function lcmTwoNumbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / gcdTwoNumbers(x, y));
}

function gcdTwoNumbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}
const a = {
  numerator: 2,
  denominator: 3,
};
const b = {
  numerator: 5,
  denominator: 6,
};
function sumOfFractions(a, b) {
  const lcm = lcmTwoNumbers(a.denominator, b.denominator);
  const sum = `Sum is ${
    (a.numerator * lcm) / a.denominator + (b.numerator * lcm) / b.denominator
  }/${lcm}`;
  return sum;
}
function differenceOfFractions(a, b) {
  const lcm = lcmTwoNumbers(a.denominator, b.denominator);
  const difference = `Difference is ${
    (a.numerator * lcm) / a.denominator - (b.numerator * lcm) / b.denominator
  }/${lcm}`;
  return difference;
}
function productOfFractions(a, b) {
  const product = `Product is ${a.numerator * b.numerator}/${
    a.denominator * b.denominator
  }`;
  return product;
}
function divisionOfFractions(a, b) {
  const part = `The part is ${a.numerator * b.denominator}/${
    a.denominator * b.numerator
  }`;
  return part;
}
function reductionOfFraction(numerator = 1, denominator = 1) {
  const gcd = gcdTwoNumbers(numerator, denominator);
  const reduction = `The reduction fraction is ${numerator / gcd}/${
    denominator / gcd
  }`;
  return reduction;
}
