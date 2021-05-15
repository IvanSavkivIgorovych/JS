let valueOfMoney = +prompt(
  "Enter sum in dollars you want to put on deposit to 2 monthes:"
);
alert(
  `Your profit in 2 monthes with 5% profit in years will be: ${
    (valueOfMoney * (5 / 6)) / 100 + valueOfMoney
  } dollars`
);
