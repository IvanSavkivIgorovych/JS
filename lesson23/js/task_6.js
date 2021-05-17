// Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
// и получает в ответ соответствующую сумму.
const moneyInDollars = +prompt("Enter your sum in USD:");
const moneyConvert = prompt(
  "Enter to what currency convert (EUR, UAH or AZN):"
);
const dollarToEuro = 1.2080212611741966658613191592172;
const dollarToHryvnias = 27.6273;
const dollarToManat = 1.6923;
switch (moneyConvert.toLowerCase()) {
  case "EUR":
  case "eur":
    alert(
      `$${moneyInDollars} in EUR wiil be ${moneyInDollars * dollarToEuro} euro`
    );
    break;
  case "UAH":
  case "uah":
    alert(
      `$${moneyInDollars} in UAH wiil be ${
        moneyInDollars * dollarToHryvnias
      } hryvnias`
    );
    break;
  case "AZN":
  case "azn":
    alert(
      `$${moneyInDollars} in AZN wiil be ${
        moneyInDollars * dollarToManat
      } manat`
    );
    break;
  default:
    alert("Please, enter correct value!!!");
    break;
}
