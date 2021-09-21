// const elMayor = (a, b) => {
//   return a > b ? a : b;
// };

const elMayor = (a, b) => (a > b ? a : b);

const membership = (member) => (member ? "2 dólares" : "10 dólares");

console.log(elMayor(6, 15));
console.log(membership(false));

//´útil para generar {} o [] con una condición implícita dentro
const friend = false;
const friendsArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  friend ? "Thor" : "Loki",
  //puedo colocar cualquier cosa, como esta fc anónima autoinvocada
  (() => "Nick Fury")(),
  //o esta función
  elMayor(2, 60),
];

console.log(friendsArr);

//otro uso del ternario: tenemos más de 2 condiciones

const note = 80; // A+ A B+ B
const grade =
  note >= 95
    ? "A+"
    : note >= 90
    ? "A"
    : note >= 85
    ? "B+"
    : note >= 80
    ? "B"
    : note >= 75
    ? "C+"
    : note >= 70
    ? "C"
    : "F";

console.log({ note, grade });
