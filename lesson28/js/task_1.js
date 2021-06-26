// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    this._radius = value;
  }
  get diameter() {
    return 2 * this.radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(10);
console.log("Radius: " + circle.radius + " cm.");
circle.radius = 25;
console.log("New radius: " + circle.radius + " cm.");
console.log("Diameter: " + circle.diameter + " cm.");
console.log(
  "Square of the circle is: " + circle.area().toFixed(2) + " square cm."
);
console.log(
  "Length of the circle is: " + circle.circumference().toFixed(2) + " cm."
);
