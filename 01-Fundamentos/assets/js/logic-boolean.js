const returnTrue = () => {
  console.log("Regresa true");
  return true;
};

const returnFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negación");
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!returnFalse()); //true

console.warn("And"); // true, si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log(returnFalse() && returnTrue()); // false
console.log(returnTrue() && returnFalse()); // false

returnTrue() && returnFalse(); // es válido también

returnFalse() && returnTrue(); // solo se ejecuta regresa false porque no es verdadera

console.warn("Or"); // para que regrese true al menos una tiene que ser V (o ambas)
console.log(true || false); // true
console.log(false || false); // solo en este caso retorna false

console.log(returnTrue() || returnFalse());
console.log("4 condiciones", true || true || true || false); // true (porque 1 es V)

console.warn("Asignaciones");

const isUndefined = undefined;
const isNull = null;
const isFalse = false;

const a1 = true && "Hola mundo" && 150; // si todos tienen valor, retorna el último
const a2 = "Hola" && "Mundo" && true;
const a3 = isFalse || "ya no soy false"; // retorna la segunda porque el 1 tiene valor
const a4 = isFalse || isUndefined || isNull || "ya no soy false"; // ya no soy falso
const a5 = isFalse || isUndefined || isNull || "ya no soy false" || true; // ya no soy falso porque no llega al true final
const a6 = isFalse || isUndefined || returnTrue() || "ya no soy false" || true; // true, porque true es un valor permiido de returnTrue()

console.log(a1, a2, a3, a4, a5, a6);
