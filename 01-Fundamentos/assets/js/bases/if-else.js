let a = 5;

if (a >= 10) {
  //mando valor booleano, pero podría mandar también undefind, null o una asignación
  console.log("a es mayor o igual que 10");
} else {
  console.log("a es menor a 10");
}

// console.log("Fin del programa");

// const today = new Date();
// let day = today.getDay(); // 0: Domingo, 1: Lunes...

// console.log(day);

// if (day === 0) {
//   console.log("Hoy es domingo");
// } else if (day === 1) {
//   console.log("Lunes");
// } else if (day === 2) {
//   console.log("Martes");
// }

// sin usar if, else, swith, solo objetos, imprimir el día de la semana
day = 3;

const dayToday = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado",
};

console.log(dayToday[day] || "Día no válido");

const dayToday2 = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

console.log(dayToday2[day] || "Día no válido");
