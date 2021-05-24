// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты,
// и возвращает результат в виде строки «чч:мм:сс».
//  выполнении задания используйте функции из предыдущих
//  2-х заданий: сначала обе даты переведите в секунды,
//  узнайте разницу в секундах, а потом разницу переведите
//  обратно в «чч:мм:сс»
function timeToSeconds(hour, minute, second) {
  return second + minute * 60 + hour * 3600;
}
function secondsToTime(x) {
  const hour = Math.floor(x / 3600);
  const minute = Math.floor((x % 3600) / 60);
  const second = x - hour * 3600 - minute * 60;
  console.log(
    hour.toString().padStart(2, "0") +
      ":" +
      minute.toString().padStart(2, "0") +
      ":" +
      second.toString().padStart(2, "0")
  );
}
function subtractOfTime(
  hour1,
  minute1 = "00",
  second1 = "00",
  hour2,
  minute2 = "00",
  second2 = "00"
) {
  console.log(
    secondsToTime(
      timeToSeconds(hour1, minute1, second1) -
        timeToSeconds(hour2, minute2, second2)
    )
  );
}
