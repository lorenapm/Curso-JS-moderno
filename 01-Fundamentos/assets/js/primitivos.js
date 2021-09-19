let name = "Peter Parker";

name = "Lorena Pérez";

console.log(name);
console.log(typeof name);

let esMarvel = false;
console.log(esMarvel);
console.log(typeof esMarvel);

//number: JS no distingue entre enteros y flotantes, todos son numbers
let age = 33;
console.log(typeof age);

//undefind
let superPower;
console.log(superPower);

//object en console log
let isNull = null;
console.log(typeof isNull);

//symbol: para identificar propiedades de manera única
let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);

console.log(symbol1 === symbol2);
