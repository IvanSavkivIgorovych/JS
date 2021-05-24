// Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».Если при
// вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(hours, minutes = "00", seconds = "00") {
  console.log(
    hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
  );
}
