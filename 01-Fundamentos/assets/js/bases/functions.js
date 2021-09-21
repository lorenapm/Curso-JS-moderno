function greeting(user) {
  console.log(arguments);
  console.log("Hola " + user);
}

//función anónima
const greeting2 = function (user) {
  console.log("Hola " + user);
};

const greetingArrow = () => {
  console.log("Hola arrow");
};

const greetingArrow2 = (user) => {
  console.log("Hola " + user);
};

// greeting("Lorena", 50, "Cipolletti");
// greeting2("Lorena");
// greetingArrow();
// greetingArrow2("Lorena");

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => {
  return a + b;
};

//cuando solo tengo 1 línea de código y es el return puedo simplificar
const add3 = (a, b) => a + b;

function getRamdom() {
  return Math.random();
}

const getRamdom2 = () => Math.random();

console.log(getRamdom2());
