// 3) Реализовать класс Employee, описывающий работника,
// и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода
// таблицы со списком работников банка. Массив работников
// необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
  constructor(name, position, experience) {
    this.name = name;
    this.position = position;
    this.experience = experience;
  }
}

const vova = new Employee("Vova Klubnichka", "Chief", 25);
const vania = new Employee("Vania Kolomyia", "Head's assistant", 5);
const julia = new Employee("Julichka", "Secretary", 1);
const sania = new Employee("Sania JS", "Technical staff", 15);
const catherine = new Employee("Poland girl", "Programmer", 0.5);

class EmpTable {
  hardWorkers = [];

  showHardWorkers(text) {
    console.log(text);
    for (const person of this.hardWorkers) {
      console.log(
        `Name: ${person.name}, position: ${person.position}, age: ${person.experience}`
      );
    }
  }

  addEmployee(chel) {
    this.hardWorkers.push(chel);
  }

  getHTML() {
    let html = "";
    html += `<table style="padding: 10px;">`;
    html += `<tbody>`;
    html += `<thead style="font-weight: bold;">`;
    html += `<tr>`;
    html += `<td> Name  </td>`;
    html += `<td> Position  </td>`;
    html += `<td> Experience  </td>`;
    html += `</tr>`;
    html += `</thead>`;
    for (const chel of this.hardWorkers) {
      html += `<tr>`;
      html += `<td> ${chel.name}  </td>`;
      html += `<td> ${chel.position}  </td>`;
      html += `<td> ${chel.experience}  </td>`;
      html += `</tr>`;
    }

    html += `</tbody>`;
    html += `</table>`;
    return html;
  }
}

let employees = new EmpTable();

employees.addEmployee(vova);
employees.addEmployee(vania);
employees.addEmployee(julia);
employees.addEmployee(sania);
employees.addEmployee(catherine);
employees.showHardWorkers("Hard workers: ");
document.write(employees.getHTML());
