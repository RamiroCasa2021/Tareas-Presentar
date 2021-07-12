//Convertir a función de flecha:
function messageUser(name) {
  return `Hello, my name is ${name}`;
}

console.log(messageUser("Bill Gates"));

//Desestructura el siguiente objeto y completa los mensajes:
const iPad = {
  marca: "Apple",
  producto: "iPad",
  modelo: "8ª Generación",
  version: 2020,
};
console.log(`Producto: `);
console.log(`Marca: `);
console.log(`Modelo: `);
console.log(`Versión: `);

/*Desestructuraciion del objeto*/ 

let {marca,} = iPad





//Desestructura el siguiente arreglo, obten el segundo nombre y usalo como parámetro de la función que viene en el mismo arreglo
const personas = [
  "Laura",

  "Ernesto",
  "Eliana",
  (n) => `Bienvenido a React ${n}`,
];




