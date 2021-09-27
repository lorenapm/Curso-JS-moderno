class Persona {
  //propiedades de clase (definimos). OJO ESTO PODEMOS QUITARLO Y FUNCIONARÏA =
  name = "";
  code = "";
  phrase = "";
  food = "";

  //constructor se va a ejecutar en el momento en que cree una nueva instancia de Persona.
  constructor(name, code, phrase) {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
  }

  //set/get: set establece un valor y solo recibe un argumento (al que le quiero establecer, en este caso que esté en mayúsculas). Get recupera el valor.
  set setFavoriteFood(food) {
    this.food = food.toUpperCase();
  }
  get getFavoriteFood() {
    return `${this.name}'s favorite food is ${this.food}`;
  }

  //defino métodos
  whoIam() {
    console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
  }

  myPhrase() {
    this.whoIam();
    console.log(`${this.name} say ${this.phrase}`);
  }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "I am your hero");
const quique = new Persona("Quique", "SuperQuique", "I`m your child");
console.log(spiderman, quique);

spiderman.whoIam();
quique.whoIam();
spiderman.myPhrase();
spiderman.setFavoriteFood = "Lemon pie";

console.log(spiderman.getFavoriteFood);
