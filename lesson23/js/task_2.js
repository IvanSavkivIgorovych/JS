// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const digit = +prompt("Enter number from 0 to 9:");
switch (digit) {
  case 0:
    alert(`Your special symbol for ${digit} is ")"`);
    break;
  case 1:
    alert(`Your special symbol for ${digit} is "!"`);
    break;
  case 2:
    alert(`Your special symbol for ${digit} is "@"`);
    break;
  case 3:
    alert(`Your special symbol for ${digit} is "#"`);
    break;
  case 4:
    alert(`Your special symbol for ${digit} is "$"`);
    break;
  case 5:
    alert(`Your special symbol for ${digit} is "%"`);
    break;
  case 6:
    alert(`Your special symbol for ${digit} is "^"`);
    break;
  case 7:
    alert(`Your special symbol for ${digit} is "&"`);
    break;
  case 8:
    alert(`Your special symbol for ${digit} is "*"`);
    break;
  case 9:
    alert(`Your special symbol for ${digit} is "("`);
    break;
  default:
    alert(
      "You enter incorrect number!!!. Please restart the page and try again!!!"
    );
    break;
}
