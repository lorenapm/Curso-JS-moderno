class Persona {
  //métodos estáticos(nombre _ no es obligatorio, le puedo llamar como quiera). Por ejemplo, uUna forma de saber cuántas instancias tengo de mi clase.
  static _counting = 0;

  //también puedo utilizar un get
  static get counting() {
    return Persona._counting + " instancias";
  }

  static messange() {
    console.log(this.name); // undefind: por el scope de la variable
    console.log("Hola a todos, soy un método static");
  }

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

    Persona._counting++;
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
// console.log(spiderman, quique);

// spiderman.whoIam();
// quique.whoIam();
// spiderman.myPhrase();
// spiderman.setFavoriteFood = "Lemon pie";

// console.log(spiderman.getFavoriteFood);

console.log("Conteo estático: ", Persona._counting);
console.log(Persona.counting);
Persona.messange();

//otra forma de crear métodos estáticos, pero no conveniente porque no queda claro a otros desarrolladores
Persona.propiedadExterna = "Hola Mundo";
console.log(Persona.propiedadExterna);
//Ojo no lo veremos en Persona.

console.log(Persona);
