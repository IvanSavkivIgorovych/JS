// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает
// в виде строки «чч:мм:сс».
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
