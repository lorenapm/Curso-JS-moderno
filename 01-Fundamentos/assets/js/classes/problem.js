// OJO: esta forma es muy antigua, anterior a JS6

const fher = {
  firstname: "Lorena",
  age: 50,
  imprimir() {
    console.log(`Name: ${this.firstname}, Age:${this.age}`);
  },
};
const peter = {
  firstname: "Peter",
  age: 40,
  imprimir() {
    console.log(`Name: ${this.firstname}, Age:${this.age}`);
  },
};

function person(firstname, age) {
  console.log("Se ejeciutó esta línea");
  this.firstname = firstname;
  this.age = age;

  this.imprimir = function () {
    console.log(`Name: ${this.firstname}, Age:${this.age}`);
  };
}

// palabra reservada New indica a JS que quiero crear una nueva instancia
const maria = new person("Maria", 18);
const melissa = new person("Melissa", 19);
console.log(maria);
maria.imprimir();
melissa.imprimir();
