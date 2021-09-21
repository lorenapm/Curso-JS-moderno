const character = {
  firstName: "Tony Stark",
  codeName: "Ironman",
  alive: false,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  adress: {
    zip: "10880, 90265",
    city: "Malibu, California",
  },
  lastFilm: "Infinity War",
};
console.log(character);
console.log("Name", character.firstName);

//otra forma de acceder a la propiedad
console.log("Name", character["firstName"]);
console.log("Age", character.age);
console.log("Coords", character.coords);
console.log("Lat", character.coords.lat);

console.log("Number suits:", character.suits.length);
// consolear el último traje
console.log("Last suits:", character.suits[character.suits.length - 1]);

const x = "alive";
console.log("Vivo", character[x]);

//Más detalles

delete character.age;

// obtener cada var/valor como un array (aquí, 7 [] de dos entradas: variable: valor)
const entriesPares = Object.entries(character);

// crear nueva propiedad
character.mmaried = true;

console.log(character);

//congela como estaba en el momento de la instrucción (no puedo cambiar ni agregar/quitar propiedades)
Object.freeze(character);

character.money = 100;
character.alive = true;
console.log(character);

// sí puedo cambiar las propiedades de los objetcts internos
character.adress.city = "Costa Rica";
console.log(character);

//lista las propiedades por su nombre en un array (ojo, no el valor)
const propieties = Object.getOwnPropertyNames(character);
// lista los valores de las propiedades en un array
const values = Object.values(character);
console.log(values);
