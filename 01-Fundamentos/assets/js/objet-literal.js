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
