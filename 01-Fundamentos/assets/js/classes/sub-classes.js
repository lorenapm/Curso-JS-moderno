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
  constructor(name = "Sin nombre", code = "Sin code", phrase = "Sin phrase") {
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

class Heroe extends Persona {
  clan = "sin clan";

  constructor(name, code, phrase) {
    //super: palabra reserada que dispara el constructor de Persona (de quien extiende Heroe)
    super(name, code, phrase);

    this.clan = "The Avengers";
  }

  whoIam() {
    console.log(`Soy ${this.name}, ${this.clan}`);
    //pudo llamar también al método de la class de quien extiendo y, en esete caso, tendría los dos (el que he creado y el que extiendo)
    super.whoIam();
  }
}

const spiderman = new Heroe("Peter Parker", "Spiderman", "I´m your hero");
console.log(spiderman);
spiderman.whoIam();
