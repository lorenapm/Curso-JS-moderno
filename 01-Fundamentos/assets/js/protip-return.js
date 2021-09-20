// function addUser(name, firstname) {
//   return {
//     name: name,
//     firstname: firstname,
//   };
// }

//cuando la prop y el valor tienen el mismo nombre puedo resumir
function addUser(name, firstname) {
  return { name, firstname };
}

// agrego paréntesis como return y dentro entre {} el objeto que quiero regresar
const addUser2 = (name, firstname) => ({
  name,
  firstname,
});

const user = addUser2("Lorena", "Pérez");

console.log(user);

function printArguments() {
  console.log(arguments);
}

// ojo: arrow tengo que usar el ... 
//NO puede llevar nada por detrás de ...
//SI podemos extraer antes alguna variable, como age
const printArguments2 = (age, ...arguments) => {
  console.log({age, arguments});
};

const printArguments3 = (...args) => {
    return args;
}
const [age, married, alive, secondname]= printArguments3(10, true, false, "Hector");
console.log({age, married, alive, secondname});

printArguments(10, true, false, "Hector");
printArguments2(10, true, false, "Hector");

//desestruración de argumentos

const tony = {
    firstName: "Tony Stark",
    codeName: "Ironman",
    alive: false,
    //age: 40,
    coords: {
      lat: 34.034,
      lng: -118.7,
    },
    suits: ["Mark I", "Mark V", "Hulkbuster"]
  };

  // desestructuro cada una de las propiedades del objeto (si le pongo un valor como a age, si no lo tiene, utilizará este por defecto)
const printPropieties = ({firstName, codeName, alive, age = 15, suits}) => {
    console.log({firstName});
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({suits});
}

printPropieties(tony);