// 2. Создать массив, описывающий чек в магазине.
// Каждый элемент массива состоит из названия товара,
// количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.
let check = [
  {
    name: "Apple",
    ammount: 5,
    price: 15,
  },
  {
    name: "Bread",
    ammount: 2,
    price: 20,
  },
  {
    name: "Fish",
    ammount: 1,
    price: 100,
  },
  {
    name: "Beer",
    ammount: 6,
    price: 30,
  },
  {
    name: "Cake",
    ammount: 2,
    price: 30,
  },
];

function checkToScreen(check) {
  for (const i of check) {
    console.log(
      `${i.name} : ${i.ammount} x $${i.price} = $${i.ammount * i.price};\n`
    );
  }
}
console.log(checkToScreen(check));

function getExpensiest(list) {
  return Math.max(...list.map((item) => item.price * item.ammount));
}

console.log(calculateSumOfCheck(check));

function getExpensiest(list) {
  let max = 0;
  for (const i of list) {
    const cost = i.price * i.ammount;
    if (cost > max) {
      max = cost;
    }
  }
  return max;
}

console.log(getExpensiest(check));

function getAveragePrice(list) {
  let sum = 0;
  for (const i of list) {
    sum += i.price;
  }
  const average = sum / list.length;
  return average;
}
console.log(
  `The average price of you purshases is: $${getAveragePrice(check)}`
);
