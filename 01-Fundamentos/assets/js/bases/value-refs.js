// todos los primitivos se pasan por valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// todos los objetos son pasados por referencia, por eso cambia el nombre de ambos en este caso
// en JS todos son objetos, salvo los primitivos
let juan = { user: "Juan" };
let ana = juan;
ana.user = "Ana";

console.log(juan, ana);

const changeName = ({ ...user }) => {
  user.name = "Tony";
  return user;
};

let peter = { name: "Peter" };
let tony = changeName(peter);

console.log({ peter, tony });

//Arreglos
const fruits = ["manzana", "pera", "piña"];

//const otherFruits = [{ ...fruits }];
// otra forma de romper la ref con slice sin argumento (mando un nuevo [] rompiendo la relación)
// aca uso time para evaluar cuál es más eficiente
console.time("slice");
const otherFruits = fruits.slice();
console.timeEnd("slice");

console.time("spread");
const otherFruits2 = [...fruits];
console.timeEnd("spread");

otherFruits.push("Mango");

console.table({ fruits, otherFruits });
