// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.
const lengthOfCircle = +prompt(
  "Enter the length of the circle in centimeters:"
);
const perimeterOfSquare = +prompt(
  "Enter the perimeter of the square in centimeters:"
);
const radius = lengthOfCircle / (2 * Math.PI);
const sideOfSquare = perimeterOfSquare / 4;
if (2 * radius <= sideOfSquare) {
  alert(
    `This circle with radius ${radius} cm can fit in this square with side ${sideOfSquare} cm.`
  );
} else {
  alert(
    `This circle with radius ${radius} cm can't fit in this square with side ${sideOfSquare} cm.`
  );
}
