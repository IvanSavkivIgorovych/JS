// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
let yesOrNo = false;
let message = "";
let dayOfWeek = 0;
do {
  if (dayOfWeek % 7 === 0) {
    message = "Monday";
  } else if (dayOfWeek % 7 === 1) {
    message = "Tuesday";
  } else if (dayOfWeek % 7 === 2) {
    message = "Wednesday";
  } else if (dayOfWeek % 7 === 3) {
    message = "Thursday";
  } else if (dayOfWeek % 7 === 4) {
    message = "Friday";
  } else if (dayOfWeek % 7 === 5) {
    message = "Saturday";
  } else if (dayOfWeek % 7 === 6) {
    message = "Sunday";
  }
  dayOfWeek++;
  yesOrNo = confirm(
    `${message}. Do you want to see the next day of the week???`
  );
} while (yesOrNo === true);
