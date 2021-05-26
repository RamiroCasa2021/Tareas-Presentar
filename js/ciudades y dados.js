
/*Dados

Escribir un script que simule el lanzamiento de dos dados. 

Hacer uso de la función Math.random para obtener números aleatorios entre 

1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de 

lanzar dos dados y anotar en un array

el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/



let dado1 = Math.round(Math.random() * 5) + 1;  /* para que sean numeros enteros y hasta 6*/

let dado2 = Math.round(Math.random() * 5) + 1;

let suma = dado1 + dado2;



for (let i=suma; i<= 49; i++ ){   /*  i<=10 condicion y cantidad de vueltas */

    
    let repeticiones = console.log(`${i} = ${suma}`);

    
} 


/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se 
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/


let ciudades = prompt(`Ingrese una Ciudad`); 






 
