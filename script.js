/* =========================
   1. 首页按钮
========================= */

/*
  点击“Reise beginnen”以后，
  网页移动到旅游目的地区域。
*/
function zuReisezielen() {

  document
    .getElementById("reiseziele")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   2. 六个旅游目的地
========================= */

/*
  每个旅游目的地有：
  名字、图标和介绍。
*/
const reiseziele = [

  {
    name: "Peking",

    symbol: "🏯",

    text:
      "Entdecke die Chinesische Mauer, die Verbotene Stadt und traditionelle Hutongs."
  },


  {
    name: "Shanghai",

    symbol: "🌆",

    text:
      "Erlebe moderne Architektur, internationale Kultur und das Leben einer Weltstadt."
  },


  {
    name: "Xi’an",

    symbol: "🏺",

    text:
      "Reise durch die Geschichte und besuche die berühmte Terrakotta-Armee."
  },


  {
    name: "Sichuan",

    symbol: "🐼",

    text:
      "Begegne Pandas und probiere die bekannte scharfe Sichuan-Küche."
  },


  {
    name: "Yunnan",

    symbol: "🍃",

    text:
      "Genieße Tee, grüne Berge, alte Dörfer und eine ruhige Atmosphäre."
  },


  {
    name: "Xinjiang",

    symbol: "⭐",

    text:
      "Entdecke Wüsten, Berge, Seen und einen wunderschönen Sternenhimmel."
  }

];


/* =========================
   3. 随机推荐目的地
========================= */

function reisezielFinden() {

  /*
    Math.random() 产生随机数字。

    reiseziele.length 是数组中
    旅游目的地的数量，也就是 6。
  */
  const zufallsZahl =
    Math.floor(
      Math.random() * reiseziele.length
    );


  /*
    根据随机数字，
    从数组中选择一个目的地。
  */
  const ziel =
    reiseziele[zufallsZahl];


  /* 修改网页中的图标 */
  document
    .getElementById("ergebnisSymbol")
    .textContent = ziel.symbol;


  /* 修改目的地名称 */
  document
    .getElementById("ergebnisTitel")
    .textContent = ziel.name;


  /* 修改目的地介绍 */
  document
    .getElementById("ergebnisText")
    .textContent = ziel.text;

}
