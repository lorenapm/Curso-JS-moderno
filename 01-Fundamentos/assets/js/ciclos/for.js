const heroes = ["Batman", "Superman", "Aquaman", "Mujer Maravilla"];

console.warn("For tradicional");
//Tiene tres partes el for: inicialización de la variable; condición por la cual el ciclo for se va a ejecutar; y

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For in");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("For of"); // extrae el valor del arr y lo retorna a hero
for (let hero of heroes) {
  console.log(hero);
}
