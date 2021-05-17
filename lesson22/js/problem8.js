const sumInUAH = +prompt("Enter your sum of UAH in your pocket:");
const priceOfChoсolate = +prompt(
  "Enter the price in UAH of one chocolate you want to buy:"
);
const change = sumInUAH % priceOfChoсolate;
const ammountOfChocolates = (sumInUAH - change) / priceOfChoсolate;
alert(
  `You can buy ${ammountOfChocolates} chocolates for your all money and you will have left ${change} UAH`
);
