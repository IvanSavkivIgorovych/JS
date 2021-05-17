// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
const day = +prompt("Enter the day (from 1 to 31):");
const month = +prompt("Enter the month (from 1 to 12)");
const year1 = +prompt("Enter the year (from 1):");
const correct = "Tomorrow it will be";
const incorrect = "Please, enter correct date!!!";
if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year1 > 0) {
  if (
    day === 31 &&
    month !== 2 &&
    month !== 4 &&
    month !== 6 &&
    month !== 9 &&
    month !== 11 &&
    month !== 12
  ) {
    alert(`${correct} ${1}.${month + 1}.${year1}.`);
  } else if (day === 31 && month === 12) {
    alert(`${correct} ${1}.${1}.${year1 + 1}.`);
  } else if (
    day === 30 &&
    (month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    alert(`${correct} ${1}.${month + 1}.${year1}.`);
  } else if (
    day > 30 &&
    (month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    alert(`${incorrect}`);
  } else if (
    year1 % 400 !== 0 ||
    (year1 % 4 !== 0 && year1 % 100 === 0 && month === 2 && day === 28)
  ) {
    alert(`${correct} ${1}.${month + 1}.${year1}.`);
  } else if (
    year1 % 400 !== 0 ||
    (year1 % 4 !== 0 && year1 % 100 === 0 && month === 2 && day > 28)
  ) {
    alert(`${incorrect}`);
  } else if (
    year1 % 400 === 0 ||
    (year1 % 4 === 0 && year1 % 100 !== 0 && month === 2 && day === 29)
  ) {
    alert(`${correct} ${1}.${month + 1}.${year1}.`);
  } else if (
    year1 % 400 === 0 ||
    (year1 % 4 === 0 && year1 % 100 !== 0 && month === 2 && day > 29)
  ) {
    alert(`${incorrect}`);
  } else {
    alert(`${correct} ${day + 1}.${month}.${year1}.`);
  }
} else {
  alert(`${incorrect}`);
}
