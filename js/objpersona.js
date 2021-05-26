

/*Objeto Persona

Crear un objeto llamado persona que contenga los siguientes atributos:

Nombre

Edad

DNI

Domicilio

Hijos (cantidad)

Profesión

Agregar Métodos:

Saludar ( mensaje de presentación en navegador o consola)

Listar (muestra la lista con los datos de la persona)*/

let persona = {

    //atributos de la persona

    nombre:`AlyxVance`,
    edad:24, 
    DNI:123456789,
    domicilio:`indefinido`,
    hijos: 2,
    profesion:`Mecánica-tecnología`,

    //metodos

    saludo: function(){

        alert('¡Hola!, Soy '+ this.nombre + `.`);

        document.write(`<br>` + 'Tengo ' + this.edad + ` años` + `<br>` + `DNI: ` 
        + this.DNI + `<br>` + ' Domicilo: ' + this.domicilio + `<br>` + 'Hijos: ' + this.hijos + `<br>` + `Profesion: ` + this.profesion);

      },

     /* datos: function () {
        document.write(this.nombre + `<br>` + ' tiene ' + this.edad + `<br>` + `años` + `<br>` + `Su DNI:` 
        + this.DNI + `<br>` + ' Domicilo:' + this.domicilio + `<br>` + 'Hijos' + this.hijos + `<br>` + `Profesion:` + this.profesion);
      
}*/


}



//saludar();


