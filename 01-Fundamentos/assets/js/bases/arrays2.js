const games = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Length: ", games.length);

const firstGame = games[0];
const lastGame = games[games.length - 1];

console.log({ firstGame, lastGame });

games.forEach((element, index, arr) => {
  console.log(element, index, arr);
});

//push: agrego un elemento al final del array
let newLength = games.push("F-Zero");
console.log(newLength, games);

//unshift: agrega elemento al inicio del array
newLength = games.unshift("ABS");
console.log(newLength, games);

// borrar el último elemento
let gamePop = games.pop();
console.log(gamePop, games);

//borrar elementos/s indicando desde qué posición y cuántos
let gamesDelete = games.splice(1, 2);
console.log({ gamesDelete, games });

//saber posición de un elemento
let indexMetroid = games.indexOf("Metroid");
console.log({ indexMetroid });
// IMPOR: si regresa -1 es que no lo encontró (útil para agregar si no lo encuentra)
