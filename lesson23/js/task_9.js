// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
// За каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.
let score = 0;
alert(
  "The Egyptian triangle is a right triangle with an aspect ratio of...?\n 1) 1:2:3;\n 2) 12:13:25;\n 3) 3:4:5."
);
const question_1 = prompt("Your answer (1, 2 or 3)");
if (question_1 === "3") {
  alert("Correct!");
  score += 2;
} else {
  alert("Incorrect(");
}
alert("What is the number pi?\n 1) 3,13;\n 2) 3,15;\n 3) 3,14.");
const question_2 = prompt("Your answer (1, 2 or 3)");
if (question_2 === "3") {
  alert("Correct!");
  score += 2;
} else {
  alert("Incorrect(");
}
alert("What is the Euler number?\n 1) 2,69;\n 2) 2,72;\n 3) 2,73.");
const question_3 = prompt("Your answer (1, 2 or 3)");
if (question_3 === "2") {
  alert("Correct!");
  score += 2;
} else {
  alert("Incorrect(");
}
alert(`Your score is ${score}!!!`);
