// Написать функцию, которая принимает часы,
// минуты и секунды и возвращает это время в секундах.
function timeToSeconds(hour, minute, second) {
  return second + minute * 60 + hour * 3600;
}
