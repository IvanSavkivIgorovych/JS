// Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем
// же текстом, который теперь можно редактировать. При нажатии
// Ctrl + , вместо textarea появляется div с уже измененным
// текстом. Не забудьте выключить поведение по
// умолчанию для этих сочетаний клавиш.

// виніс в окрему функцію, щоб перевикористати
function addResizer(elem) {
  const resizer = document.createElement("div");
  resizer.className = "content__textarea--resizer";
  elem.append(resizer);

  const initResize = (e) => {
    e.preventDefault(); // метод
    window.addEventListener("mousemove", startResize);
    window.addEventListener("mouseup", stopResize);
  };

  const startResize = (e) => {
    elem.style.width = e.clientX - elem.offsetLeft + "px";
    elem.style.height = e.clientY - elem.offsetTop + "px"; // щоб ресайзити по вертикалі
  };

  const stopResize = () => {
    window.removeEventListener("mousemove", startResize);
    window.removeEventListener("mouseup", stopResize);
  };

  resizer.addEventListener("mousedown", initResize);
}

document.body.addEventListener("keydown", (event) => {
  let elem = document.querySelector(".content__textarea");

  // повиносив умови для читабельності
  const isCtrlE = event.code === "KeyE" && (event.ctrlKey || event.metaKey); // metaKey на макбуках замІсть ctrl
  const isCtrlComma =
    event.code === "Comma" && (event.ctrlKey || event.metaKey);

  if (isCtrlE || isCtrlComma) {
    event.preventDefault(); // event.retrnValue = false --- застаріло, зараз використовують preventDefault
  }

  if (isCtrlE && elem.nodeName === "DIV") {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("cols", 40);
    textarea.setAttribute("rows", 30);
    textarea.className = "content__textarea";
    textarea.value = elem.textContent; // для textarea змінюємо value
    elem.replaceWith(textarea);
  }

  if (isCtrlComma && elem.nodeName === "TEXTAREA") {
    const textBlock = document.createElement("div");
    textBlock.className = "content__textarea";
    textBlock.textContent = elem.value;

    addResizer(textBlock);

    elem.replaceWith(textBlock);
  }
});

// Создать HTML-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо
// отсортировать данные по этой колонке.
// Учтите, что числовые значения должны
// сортироваться как числа, а не как строки.

const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

const employees = [
  new Employee("Tolik", "Big Boss", "Sales", 10000),
  new Employee("Sanya", "Manager", "Sales", 5000),
  new Employee("Julia", "Manager", "Sales", 5000),
  new Employee("Klubnichka", "Manager", "Sales", 5000),
  new Employee("Vatal'ka", "Manager", "Sales", 5000),
  new Employee("Zhenia", "Manager", "Sales", 5000),
  new Employee("Vania", "DevOps Engineer", "DevOps", 3500),
  new Employee("Elon", ".Net Senior Developer", "Desktop Solutions", 4000),
  new Employee("Drako", "Team Lead", "Desktop Solutions", 5000),
  new Employee(
    "Trinity Matrix",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Sania Jun", ".Net Junior Developer", "Desktop Solutions", 1000),
  new Employee("WhoIsIt", ".Net Junior Developer", "Desktop Solutions", 1000),
  new Employee("Mark", ".Net Junior Developer", "Desktop Solutions", 1000),
  new Employee(
    "Harry Potter",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee("Catherine", ".Net Senior Developer", "Desktop Solutions", 4000),
  new Employee(
    "Merlin Mysterier",
    ".Net Middle Developer",
    "Desktop Solutions",
    4000
  ),
  new Employee(
    "Harry Potter",
    ".Net Senior Developer",
    "Desktop Solutions",
    4000
  ),
];

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }
  // перейменував, бо getHtml судячи з назви повинна повертати html
  render() {
    const table = document.getElementById("content__table");

    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "content__tbody");
    table.append(tbody);

    const head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");

    const th1 = document.createElement("th");
    th1.textContent = "Name";
    th1.setAttribute("id", "content__th1");
    th1.style.cursor = "pointer";

    const th2 = document.createElement("th");
    th2.textContent = "Position";
    th2.setAttribute("id", "content__th2");
    th2.style.cursor = "pointer";

    const th3 = document.createElement("th");
    th3.textContent = "Department";
    th3.setAttribute("id", "content__th3");
    th3.style.cursor = "pointer";

    const th4 = document.createElement("th");
    th4.textContent = "Salary ($)";
    th4.setAttribute("id", "content__th4");
    th4.style.cursor = "pointer";

    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);

    tbody.append(head);

    for (const employee of this.employees) {
      // для масивів - for .. of
      const tr = document.createElement("tr");
      tbody.append(tr);
      for (const key in employee) {
        let td = document.createElement("td");
        td.textContent = employee[key];
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
        tr.append(td);
      }
    }

    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: lightgrey;");
  }
}

const employeeTable = new EmpTable(employees);
employeeTable.render();

const getCellValue = (tr, i) =>
  tr.children[i].innerText || tr.children[i].textContent;

const comparer = (i, asc) => (a, b) =>
  ((v1, v2) =>
    v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
      ? v1 - v2
      : v1.toString().localeCompare(v2))(
    getCellValue(asc ? a : b, i),
    getCellValue(asc ? b : a, i)
  );

document.querySelectorAll("th").forEach((th) => {
  // тут краще порозділяти для читабельності
  let asc = true;
  th.addEventListener("click", () => {
    const table = th.closest("table");
    const colIndex = Array.from(th.parentNode.children).indexOf(th);
    const rows = Array.from(table.querySelectorAll("tr:nth-child(n+2)"));

    rows.sort(comparer(colIndex, asc));
    rows.forEach((tr) => table.appendChild(tr));
    asc = !asc;
    // this.asc - працює, але this в даному контексті буде посилатися на об'єкт window
    // тому краще явно задати змінну
  });
});

// Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока,
// если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resDiv = document.getElementById("content__textarea");
addResizer(resDiv); // тут і знадобилася функція, щоб не писати одне й те ж
