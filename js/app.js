
/*capitalizar nombre*/

let pregunta = prompt(`Ingresa tu nombre: `);

let nombre = "pregunta";

console.log(pregunta.toUpperCase());    /*para cambiar a mayuscula*/

document.write(pregunta.toUpperCase());

/*TAREA 2 */ 


let numero1 = prompt("Ingrese numero 1: ");   
let numero2 = prompt("Ingrese numero 2: ");
let numero3 = prompt("Ingrese numero 3: ");

numero1=parseInt(numero1);   /* muestra y convierte en numero entero*/
numero2=parseInt(numero2);
numero3=parseInt(numero3);

console.log(`El numero maximo es: ${Math.max(numero1,numero2,numero3)}`);

console.log(`El numero minimo es: ${Math.min(numero1,numero2,numero3)}`);


document.write(`El numero maximo es:` + Math.max(numero1,numero2,numero3));
document.write(`El numero minimo es:` + Math.min(numero1,numero2,numero3));


console.log(`La raiz cuadrada del segundo numero es: ${Math.sqrt(numero2)}`);

document.write(`La raiz cuadrada del segundo numero es:` + Math.sqrt(numero2));





 













 