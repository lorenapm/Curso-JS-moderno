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

greeting("Lorena", 50, "Cipolletti");
greeting2("Lorena");
greetingArrow();
greetingArrow2("Lorena");
