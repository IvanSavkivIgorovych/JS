// Запросить у пользователя год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const year = +prompt("Enter the year:");
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  alert(`${year} year is intercalary`);
} else {
  alert(`${year} year is not intercalary`);
}
//кожен четвертий рік є високосний
//http://shpargalkablog.ru/2013/10/leap-year.html
