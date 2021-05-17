// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const sum = +prompt("Enter the purchase amount in USD:");
if (sum < 200 && sum > 0) {
  alert(`Your discounted payment amount is $${sum}`);
} else if (sum >= 200 && sum < 300) {
  alert(`Your discounted payment amount is $${sum - sum * 0.03}`);
} else if (sum >= 300 && sum < 500) {
  alert(`Your discounted payment amount is $${sum - sum * 0.05}`);
} else if (sum >= 500) {
  alert(`Your discounted payment amount is $${sum - sum * 0.07}`);
} else if (sum <= 0) {
  alert("Please, enter correct sum");
}
