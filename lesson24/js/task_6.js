// Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
// решить пример, вывести результат и спросить, хочет ли он решить
// еще один пример. И так до тех пор, пока пользователь не откажется.
let continueOrNot = false;
do {
  const num_1 = +prompt("Enter the first number:");
  const num_2 = +prompt("Enter the second number:");
  const operator = prompt("Enter the operator (+, -, *, /, or ^):");
  let result = null;
  switch (operator) {
    case "+":
      result = num_1 + num_2;
      break;
    case "-":
      result = num_1 - num_2;
      break;
    case "*":
      result = num_1 * num_2;
      break;
    case "/":
      result = num_1 / num_2;
      break;
    case "^":
      result = num_1 ** num_2;
      break;
  }
  alert(`The result is ${result}.`);
  continueOrNot = confirm("Do you want to continue???");
} while (continueOrNot === true);
