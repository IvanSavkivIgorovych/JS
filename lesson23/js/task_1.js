// Запросить у пользователя его возраст и определить, кем он является:
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const age = +prompt("Enter your age:");
if (age > 0 && age <= 2) {
  alert(`You are baby!`);
} else if (age > 2 && age <= 12) {
  alert(`You are child!`);
} else if (age > 12 && age <= 18) {
  alert(`You are teenager!`);
} else if (age > 18 && age <= 60) {
  alert(`You are adult!`);
} else if (age > 60 && age <= 120) {
  alert(`You are pensioner!`);
} else if (age > 120) {
  alert(`You are long-lived!!!`);
} else if (age === 0) {
  alert(`You are borning now!!!`);
} else {
  alert(`You don't exist yet!!!`);
}
