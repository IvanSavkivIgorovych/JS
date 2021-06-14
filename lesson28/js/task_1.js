// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  constructor(_r) {
    this.r = _r;
  }
  get showRadius() {
    return this.r;
  }
  set changeRadius(newR) {
    this.r = newR;
  }
  get showDiameter() {
    return 2 * this.r;
  }
  squareOfCircle() {
    return Math.PI * this.r ** 2;
  }
  lenghtOfCircle() {
    return 2 * Math.PI * this.r;
  }
}

let circle = new Circle(10);
console.log("Radius: " + circle.showRadius + " cm.");
circle.changeRadius = 25;
console.log("New radius: " + circle.showRadius + " cm.");
console.log("Diameter: " + circle.showDiameter + " cm.");
console.log(
  "Square of the circle is: " +
    circle.squareOfCircle().toFixed(2) +
    " square cm."
);
console.log(
  "Length of the circle is: " + circle.lenghtOfCircle().toFixed(2) + " cm."
);
