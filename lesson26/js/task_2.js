// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
// и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.
function lcm_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
const fraction = {
  numerator: null,
  denominator: null,
  sum: function sumOfFractions(
    numerator_1 = 1,
    denominator_1 = 1,
    numerator_2 = 1,
    denominator_2 = 1
  ) {
    const lcm = lcm_two_numbers(denominator_1, denominator_2);
    const sum = `Sum is ${
      (numerator_1 * lcm) / denominator_1 + (numerator_2 * lcm) / denominator_2
    }/${lcm}`;
    return sum;
  },
  subtraction: function differenceOfFractions(
    numerator_1 = 1,
    denominator_1 = 1,
    numerator_2 = 1,
    denominator_2 = 1
  ) {
    const lcm = lcm_two_numbers(denominator_1, denominator_2);
    const difference = `Difference is ${
      (numerator_1 * lcm) / denominator_1 - (numerator_2 * lcm) / denominator_2
    }/${lcm}`;
    return difference;
  },
  multiple: function productOfFractions(
    numerator_1 = 1,
    denominator_1 = 1,
    numerator_2 = 1,
    denominator_2 = 1
  ) {
    const product = `Product is ${numerator_1 * numerator_2}/${
      denominator_1 * denominator_2
    }`;
    return product;
  },
  division: function divisionOfFractions(
    numerator_1 = 1,
    denominator_1 = 1,
    numerator_2 = 1,
    denominator_2 = 1
  ) {
    const part = `The part is ${numerator_1 * denominator_2}/${
      denominator_1 * numerator_2
    }`;
    return part;
  },
  reduction: function reductionOfFraction(numerator = 1, denominator = 1) {
    const gcd = gcd_two_numbers(numerator, denominator);
    const reduction = `The reduction fraction is ${numerator / gcd}/${
      denominator / gcd
    }`;
    return reduction;
  },
};
