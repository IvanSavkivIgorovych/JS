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
  return formatTime(hour, minute, second);
}
function subtractOfTime(
  hour1,
  minute1 = 0,
  second1 = 0,
  hour2,
  minute2 = 0,
  second2 = 0
) {
  console.log(
    secondsToTime(
      timeToSeconds(hour1, minute1, second1) -
        timeToSeconds(hour2, minute2, second2)
    )
  );
}
