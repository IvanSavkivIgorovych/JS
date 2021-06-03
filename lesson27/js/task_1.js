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
    product: "Bread",
    ammount: 2,
    purchased: false,
  },
  {
    product: "Milk",
    ammount: 1,
    purchased: true,
  },
  {
    product: "Butter",
    ammount: 1,
    purchased: true,
  },
  {
    product: "Potato",
    ammount: 5,
    purchased: false,
  },
  {
    product: "Apple",
    ammount: 3,
    purchased: true,
  },
];

function listToScreen() {
  const orderedList = listOfPurchases.sort((a, b) => {
    return a.purchased - b.purchased;
  });
  console.log(orderedList);
}

function addPurshaseToList(list, add) {
  let product = list.find((something) => something.product === add);
  if (product) {
    product.ammount += 1;
  } else {
    list.push({ product: add, ammount: 1, purchased: false });
  }
  return list;
}

function BuyProduct(list, product) {
  let productBuy = list.find((something) => something.product === product);
  if (productBuy) {
    productBuy.purchased = true;
  }
  return list;
}
