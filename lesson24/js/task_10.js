// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100
// и отгадать его следующим способом: каждую итерацию цикла делите диапазон
// чисел пополам, записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того, что указал
// пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100,
// поделили пополам и получили 50. Если пользователь указал,
// что его число > 50, то изменили диапазон на от 51 до 100.
// И так до тех пор, пока пользователь не выберет == N.
alert("Please, guess the number from 0 to 100:");
let N = 200;
let guessNumber = "";
let finishGame = guessNumber === "=";
do {
  N = Math.floor(N / 2);
  guessNumber = prompt(
    `Your number is > ${Math.floor(N / 2)}, < ${Math.floor(
      N / 2
    )} or = ${Math.floor(N / 2)}? Please enter <, > or =.`
  );
  if (guessNumber === "<") {
    N = Math.floor(N / 2);
    guessNumber = prompt(
      `Your number is > ${Math.floor(N / 2)}, < ${Math.floor(
        N / 2
      )} or = ${Math.floor(N / 2)}? Please enter <, > or =.`
    );
  } else if (guessNumber === ">") {
    N = Math.floor(N / 2) + Math.floor(N / 2) / 2;
    guessNumber = prompt(
      `Your number is > ${N}, < ${N} or = ${N}? Please enter <, > or =.`
    );
  } else if (guessNumber === "=") {
    alert(`Your number is ${N}!!!`);
    break;
  } else {
    alert("Please, enter <, > or = !!!!!!!!!!");
  }
} while (finishGame !== "=");
