// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание,
//     подчеркивание и т. д.). Каждый элемент массива – это объект,
//     состоящий из двух свойств: название стиля и значение стиля.
//     Написать функцию, которая принимает массив стилей и текст, и
//     выводит этот текст с помощью document.write() в тегах <p></p>,
//     добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const style = [
  { property: "color", value: "#B22222" },
  { property: "background-color", value: "#000000" },
  { property: "font-size", value: "20px" },
  { property: "font-family", value: "Arial" },
  { property: "text-decoration", value: "underline" },
];
function getStyle(styles) {
  const styleList = styles
    .map((style) => `${style.property} : ${style.value}`)
    .join("; ");
  return styleList;
}
const lorem = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolor iste
veniam laborum quasi dolore aut atque nesciunt modi architecto saepe quas
explicabo quos facilis ratione soluta eius minima, quis, quia, culpa fuga
animi sit. Ut ex vel quasi? Pariatur labore minima commodi perferendis alias
nihil tenetur obcaecati corporis accusantium ullam laudantium ratione in
illo inventore neque, illum odit sint harum dolore excepturi itaque totam
dolor praesentium odio? Accusamus nesciunt aut pariatur, deleniti itaque
temporibus perferendis suscipit recusandae. Laudantium quia doloribus enim
eum corrupti voluptas at sed. Voluptates velit nihil exercitationem, facere
quibusdam at laudantium mollitia inventore expedita necessitatibus.`;

function displayText(styles, info) {
  document.write(`<p style = "${getStyle(styles)}">${info}</p>`);
}
displayText(style, lorem);
