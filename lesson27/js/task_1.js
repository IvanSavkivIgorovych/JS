// 1. Создать массив «Список покупок». Каждый элемент массива является объектом,
// который содержит название продукта, необходимое количество и куплен или нет.
// Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты,
// а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
//  в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
let listOfPurchases = [
  {
    name: "Bread",
    ammount: 2,
    purchased: false,
  },
  {
    name: "Milk",
    ammount: 1,
    purchased: true,
  },
  {
    name: "Butter",
    ammount: 1,
    purchased: true,
  },
  {
    name: "Potato",
    ammount: 5,
    purchased: false,
  },
  {
    name: "Apple",
    ammount: 3,
    purchased: true,
  },
];

function sortProducts(products) {
  products.sort((a, b) => a.purchased - b.purchased);
}

function showProducts(products) {
  console.log(products);
}

function addPurshaseToList(list, productToAdd) {
  const existingProduct = list.find((product) => product.name === productToAdd);
  if (existingProduct) {
    existingProduct.amount++;
  } else {
    list.push({ name: productToAdd, amount: 1, purchased: false });
  }
  return list;
}

function buyProduct(list, product) {
  let productBuy = list.find((something) => something.name === product);
  if (productBuy) {
    productBuy.purchased = true;
  }
  return list;
}
