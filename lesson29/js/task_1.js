//1. Создать страницу, которая выводит нумерованный список песен:

const playList = [
  { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
  { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
  { author: "AC / DC", song: "BACK IN BLACK" },
  { author: "QUEEN", song: "WE WILL ROCK YOU" },
  { author: "METALLICA", song: "ENTER SANDMAN" },
];

const bodyElement = document.querySelector("body");

function printListOnHtml(arr) {
  const list = document.createElement("ol");
  for (const item of arr) {
    const listText = document.createElement("li");
    let listItemInfo = ` ${item.author}, song "${item.song}" `;
    listText.textContent = listItemInfo;
    list.appendChild(listText);
  }
  bodyElement.appendChild(list);
}

printListOnHtml(playList);
