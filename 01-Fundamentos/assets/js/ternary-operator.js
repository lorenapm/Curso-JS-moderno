/* Días de semana abrimos a las 11,
 *finde a las 9
 */

//Entra en la web para consultar si está abierto hoy

const day = 0; // domingo
let hourCurrent = 8;

let hourOpen;
let message; // Está abierto, está cerrado, hoy abrimos a las XX

//if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//   console.log("Es fin de semana");
//   hourOpen = 9;
// } else {
//   console.log("Es un día de semana");
//   hourOpen = 11;
// }

hourOpen = [0, 6].includes(day) ? 9 : 11;

// if (hourCurrent >= hourOpen) {
//   message = "Está abierto";
// } else {
//   message = `Está cerrado, hoy abrimos a las ${hourOpen}`;
// }
message =
  hourCurrent >= hourOpen
    ? "Está abierto"
    : `Está cerrado, hoy abrimos a las ${hourOpen}`;

console.log({ hourOpen, message });
