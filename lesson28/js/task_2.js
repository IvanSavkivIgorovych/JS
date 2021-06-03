// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим
//      цветом; текст выводится до тех пор, пока в маркере есть чернила;
//      один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его
// от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.

class Marker {
  constructor(color) {
    (this.color = color), (this.amount = 100);
  }
  printToScreen(string) {
    let html = "";
    for (let char of string) {
      if (this.amount === 0) {
        break;
      }
      if (char !== " " && this.amount !== 0) {
        this.amount -= 0.5;
      }
      html += char;
    }
    document.write(`<p style="color: ${this.color}">${html}</p>`);
  }
}

let marker = new Marker("red", 100);
const text = prompt("Enter the text:");
marker.printToScreen(text);

class RefuelingMarker extends Marker {
  refueling() {
    this.amount = 100;
  }
}

let refMarker = new RefuelingMarker("red", 100);
let text2 = prompt("Enter the text:");
refMarker.printToScreen(text2);
refMarker.refueling();
text2 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non repellat, istelabore, soluta accusamus ab corrupti necessitatibus ducimus vel quo nobisomnis eius sit alias illum, quam deleniti ut consequatur magnam quidem.Optio fugit nemo quibusdam inventore minus iusto neque.";
refMarker.printToScreen(text2);
