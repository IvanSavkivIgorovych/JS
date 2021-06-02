// 3. Создать объект, описывающий время (часы, минуты, секунды),
// и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени,
// может измениться и другая. Например, если ко времени «20:30:45»
// добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
function formatTimeUnit(value) {
  return value.toString().padStart(2, "0");
}
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  screen: function timeToScreen(h, m, s) {
    return (
      formatTimeUnit(h) + ":" + formatTimeUnit(m) + ":" + formatTimeUnit(s)
    );
  },
  changeSeconds: function changeSeconds(h, m, s, change) {
    const hour = Math.floor(change / 3600);
    const minute = Math.floor((change % 3600) / 60);
    const second = change - hour * 3600 - minute * 60;
    let newH = hour + h;
    let newM = minute + m;
    let newS = second + s;
    if (newS >= 60) {
      newM += Math.floor(newS / 60);
      newS -= 60;
    }
    if (newM >= 60) {
      newH += Math.floor(newM / 60);
    }
    if (newH >= 23) {
      newH = newH % 24;
    }
    return (
      formatTimeUnit(newH) +
      ":" +
      formatTimeUnit(newM) +
      ":" +
      formatTimeUnit(newS)
    );
  },
  changeMinutes: function changeMinutes(h, m, s, change) {
    const hour = Math.floor(change / 60);
    let newH = hour + h;
    let newM = m + (change % 60);
    if (newM >= 60) {
      newH += Math.floor(newM / 60);
      newM -= 60;
    }
    if (newH >= 23) {
      newH = newH % 24;
    }
    return (
      formatTimeUnit(newH) +
      ":" +
      formatTimeUnit(newM) +
      ":" +
      formatTimeUnit(s)
    );
  },
  changeHours: function changeHours(h, m, s, change) {
    let newH = change + h;
    if (newH >= 23) {
      newH = newH % 24;
    }
    return (
      formatTimeUnit(newH) + ":" + formatTimeUnit(m) + ":" + formatTimeUnit(s)
    );
  },
};
