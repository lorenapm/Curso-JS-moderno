class Persona {
  //propiedades de clase (definimos)
  name = "";
  code = "";
  phrase = "";

  //constructor se va a ejecutar en el momento en que cree una nueva instancia de Persona.
  constructor(name, code, phrase) {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
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
