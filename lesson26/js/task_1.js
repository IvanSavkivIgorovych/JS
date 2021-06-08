// 1. Создать объект, описывающий автомобиль
// (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления
// переданного расстояния со средней скоростью. Учтите,
// что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const car = {
  manufacturer: "Russia Tolyatti",
  model: 21074,
  year: 2008,
  speed: 100,
  toScreen() {
    return `The manufacturer is ${this.manufacturer}, model - ${this.model}, year of manufacture is ${this.year} and average speed is ${this.speed} km/h`;
  },
  timeSpend(length) {
    const message =
      "The time needed to overcome transmitted distance at medium speed is:";
    const time = Math.floor(length / car.speed);
    const rest = Math.floor(time / 4);
    if (time % 4 === 0) {
      return `${message} ${time + rest - 1} hours`;
    } else {
      return `${message} ${time + rest} hours`;
    }
  },
};
