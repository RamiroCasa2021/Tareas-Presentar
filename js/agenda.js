

/*Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro 
cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, 
indicando nosotros el tamaño o con un tamaño por defecto (10).

Las funciones serán:
aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Usar LocalStorage para guardar la info de la agenda y para consultar sus datos*/

let agendas = JSON.parse(localStorage.getItem("agendas")) || []; //esto es un arreglo para guardar - getItem para trar info de localstore

class Agendados{              //aqui no se puede usar funciones por fuera si
    constructor(nombre, email, numero){

        this.nombre=nombre;
        this.email=email;
        this.numero=numero;
    }
}

function añadirContacto(nombre, email, numero){ //se usa datos del parentesis del constructo

    agendas.push(new Agendados(nombre, email, numero)); //se usa push  para mandar datos al arreglo, pero luego hay que actualizar

    localStorage.setItem("agendas",JSON.stringify(agendas)); //para actualizar datos del localstore

}  

function listarContactos(){
    agendas.forEach(function(contacto) {  // en el for la funccion se usa contacto para usar como vairble en busqueda de info
      
        console.log(`Nombre: ${contacto.nombre}`);
        console.log(`Email: ${contacto.email}`);
        console.log(`Telefono: ${contacto.numero}`);
        console.log(`============================`);
        
    });
}

function buscarContacto(nombre){ // con esta funcion vamos a buscar un elemento se usa find se debe guardar antes en variable
//y al lado de la funcion () se coloca el imtem que buscamos, en este caso se usa: nombre

let user = agendas.find(function (usuario){  //para buscar en el arreglo
    return usuario.nombre === nombre;
});

if (user){

        console.log(`Nombre: ${user.nombre}`);
        console.log(`Email: ${user.email}`);
        console.log(`Telefono: ${user.numero}`);
        console.log(`============================`);
}else{
    console.warn("NO se encuentra usuario");
}
}

function eliminarContacto(email){//findIndex para buscar una posicion
    let iduser = agendas.findIndex(function(persona){
        return persona.email === email
    })
if(iduser>-1){
    let validar = confirm(`esta seguro quiere eliminar el usuario`)
    if(validar){
        agendas.splice(iduser,1) //para eliminar un elemento 
        localStorage.setItem(`agendas`,JSON.stringify(`agendas`))
        console.log("El usuario a sido eliminado")
    }else{
        console.log("El usuario no existe")
    }
}

}
