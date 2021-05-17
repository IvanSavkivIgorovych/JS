// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const digit = +prompt("Enter number from 0 to 9:");
let symbol = null;
switch (digit) {
  case 0:
    symbol = ")";
    break;
  case 1:
    symbol = "!";
    break;
  case 2:
    symbol = "@";
    break;
  case 3:
    symbol = "#";
    break;
  case 4:
    symbol = "$";
    break;
  case 5:
    symbol = "%";
    break;
  case 6:
    symbol = "^";
    break;
  case 7:
    symbol = "&";
    break;
  case 8:
    symbol = "*";
    break;
  case 9:
    symbol = "(";
    break;
}
alert(
  symbol
    ? `Your special symbol for ${digit} is "${symbol}"`
    : "You enter incorrect number!!!. Please restart the page and try again!!!"
);
