// 4. Создать массив аудиторий академии. Объект-аудитория состоит
//  из названия, количества посадочных мест (от 10 до 20) и названия
//  факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
//  Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

const classes = [
  { name: "Hero", capacity: 13, faculty: "math" },
  { name: "Marvel", capacity: 16, faculty: "math" },
  { name: "Ukraine", capacity: 12, faculty: "physics" },
  { name: "Crimea", capacity: 19, faculty: "philology" },
  { name: "Ternopil", capacity: 20, faculty: "geography" },
];

function showAllAuditoriums(arr) {
  arr.forEach((classes) => {
    console.log(
      `Hall "${classes.name}" can fit ${classes.capacity} peoples and is  for the ${classes.faculty} faculty`
    );
  });
}
showAllAuditoriums(classes);

function getFacultyAuditoria(auditoria, faculty) {
  return auditoria.filter((classes) => classes.faculty === faculty);
}

//  Объект-группа состоит из названия, количества студентов и названия факультета;

let group = { name: "M-22", students: 13, faculty: "math" };

function checkForGroup(auditoria, group) {
  return auditoria.filter((auditorium) => {
    return (
      auditorium.capacity >= group.students &&
      auditorium.faculty === group.faculty
    );
  });
}

console.log("_________________________________________________________");

const geographyAuditoria = getFacultyAuditoria(classes, "math");
showAllAuditoriums(geographyAuditoria);
console.log("_________________________________________________________");
// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
const auditoriaForGroupM22 = checkForGroup(classes, group);
showAllAuditoriums(auditoriaForGroupM22);

// Функция сортировки аудиторий по количеству мест;
function sortByAmmount(arr) {
  arr.sort((a, b) => (a.capacity > b.capacity ? 1 : -1));
  return arr;
}
console.log("_________________________________________________________");
console.log(sortByAmmount(classes));

// Функция сортировки аудиторий по названию (по алфавиту).
function sortAlphabet(arr) {
  return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
}
