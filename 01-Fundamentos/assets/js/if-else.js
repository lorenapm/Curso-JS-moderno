let a = 5;

if (a >= 10) {
  //mando valor booleano, pero podría mandar también undefind, null o una asignación
  console.log("a es mayor o igual que 10");
} else {
  console.log("a es menor a 10");
}

// console.log("Fin del programa");

const today = new Date();
let day = today.getDay(); // 0: Domingo, 1: Lunes...

console.log(day);

if (day === 0) {
  console.log("Hoy es domingo");
} else if (day === 1) {
  console.log("Lunes");
} else if (day === 2) {
  console.log("Martes");
}
