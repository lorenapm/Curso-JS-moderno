const cars = ["Ford", "Mazda", "Toyota"];

let i = 0;

console.warn("While");

while (i < cars.length) {
  console.log(cars[i]);
  //i = i + 1;
  i++;
}

//que la condición sea verdadera, otras no lo son y haría que el ciclo no se ejecute, como:
//undefined
//null
//false

console.warn("Do while");
// do while va a ejecutar el bloque interno una vez (el do se ejecuta siempre que se cumpla la condición de while())

let j = 0;

do {
  console.log(cars[j]);
  j++;
} while (cars[j]);
