// Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».Если при
// вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function formatTimeUnit(value) {
  return value.toString().padStart(2, "0");
}
function formatTime(hours, minutes = 0, seconds = 0) {
  return (
    formatTimeUnit(hours) +
    ":" +
    formatTimeUnit(minutes) +
    ":" +
    formatTimeUnit(seconds)
  );
}
