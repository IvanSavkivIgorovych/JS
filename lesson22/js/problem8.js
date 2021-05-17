let sumInUAH = +prompt("Enter your sum of UAH in your pocket:");
let priceOfChoсolate = +prompt(
  "Enter the price in UAH of one chocolate you want to buy:"
);
let ammountOfChocolates =
  (sumInUAH - (sumInUAH % priceOfChoсolate)) / priceOfChoсolate;
alert(
  `You can buy ${ammountOfChocolates} chocolates for your all money and you will have left ${
    sumInUAH - ammountOfChocolates * priceOfChoсolate
  } UAH`
);
