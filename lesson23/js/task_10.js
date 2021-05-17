// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
const day = +prompt("Enter the day (from 1 to 31):");
const month = +prompt("Enter the month (from 1 to 12)");
const year1 = +prompt("Enter the year (from 1):");
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
    alert(`Tomorrow it will be ${1}.${month + 1}.${year1}.`);
  } else if (day === 31 && month === 12) {
    alert(`Tomorrow it will be ${1}.${1}.${year1 + 1}.`);
  } else if (
    day === 30 &&
    (month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    alert(`Tomorrow it will be ${1}.${month + 1}.${year1}.`);
  } else if (
    day > 30 &&
    (month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    alert("Please, enter correct date!!!");
  } else if (year1 % 4 !== 0 && month === 2 && day === 28) {
    alert(`Tomorrow it will be ${1}.${month + 1}.${year1}.`);
  } else if (year1 % 4 !== 0 && month === 2 && day > 28) {
    alert("Please, enter correct date!!!");
  } else if (year1 % 4 === 0 && month === 2 && day === 29) {
    alert(`Tomorrow it will be ${1}.${month + 1}.${year1}.`);
  } else if (year1 % 4 === 0 && month === 2 && day > 29) {
    alert("Please, enter correct date!!!");
  } else {
    alert(`Tomorrow it will be ${day + 1}.${month}.${year1}.`);
  }
} else {
  alert("Please, enter correct date!!!");
}
