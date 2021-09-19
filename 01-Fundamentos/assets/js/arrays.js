//forma poco usada de crear un arreglo (este es uno de 10 posiciones o elementos)
// const arr = new Array(10);
// console.log(arr);

//forma tradional
// const arr = [];
// console.log(arr);

const videoGames = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log(videoGames[0]);

const arrThings = [
  true,
  123,
  "Lorena",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["x", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];
//console.log(arrThings[2]);
console.log(arrThings[7][4][1]);
