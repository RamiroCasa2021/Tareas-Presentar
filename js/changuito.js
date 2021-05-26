
// TAREA DE CARRITO

/*Crear una aplicación de changuito de compras donde se ingresen productos como elementos en un array
Las tareas que debe hacer son las siguientes:

Agregar producto al carrito
Listar los productos del carrito
Buscar un producto en el carrito
Filtrar productos según una palabra
Eliminar producto del carrito

*/

let carrito = [`BANANA`, `BICICLETA`, `HORNO`, `PARLANTES`];

//COMENZAMOS A LISTAR

console.log(`productos del carrito`);

function listarProductos(){

  // for (let i = 0; i < carrito.length; i++) {
        
    //    console.log(`${(i+1) - ${carrito[i]}`);

// }
    carrito.map(function(producto,index){


    console.log(`${(index + 1)} - ${carrito[index]}`);
        
    });    
}



function agregarProductos() {

    

//let producto = prompt(`ingrese un producto`);
  

//if (producto) {

carrito.push(producto.toUpprtCase());

while(producto){

carrito.push(producto.trim().toUpprtCase());


producto = prompt(`ingrese un producto`)

}

listarProductos();

}

function buscarProducto() {

    let producto = prompt("Ingrese el producto a buscar");

    if (producto) {

      let resultado = carrito.includes(producto.trim().toUpperCase());

      if (resultado) {

        console.log(`El producto ${producto.trim().toUpperCase()} está en el carrito`);

      } else {

        console.warn("El producto no existe");
      }

    } else {

      console.error("No se ingreso un producto o canceló el programa");
    }
  }

  /*filtrando productos*/

  function filtrarProductos(array) {

    let producto = prompt("Ingrese el producto o palabra");

    if (producto) {

      let productos = carrito.filter(function (produc) {

        return produc.indexOf(producto.trim().toUpperCase()) > -1; /*trim para quitar espacios en blanco*/
      });

      // console.log(productos);
      if (productos.length > 0) {
        return productos;

      } else {
        console.error("No se encontró ningún producto con esa búsqueda");
      }

    } else {
      console.error("Campo vacio o cancelado");
    }
  }


  function eliminarProducto() {
    let pos = prompt("Ingrese el número del producto a eliminar");

    if (pos) {

      pos = parseInt(pos);
      let producto = carrito[pos - 1];

      if (producto !== undefined) {

        let validar = confirm(`Esta seguro que quiere eliminar ${producto}`);

        if (validar) {

          carrito.splice(pos - 1, 1);
          console.log(`Eliminado el producto ${producto}`);
          listarProductos();
        }
        
      } else {
        console.error("No hay producto con esa posición");
      }
    } else {
      console.error("Ocurrió un error y no es posible realizar la acción");
    }
  }
  
  
  
  
  
  


      
  }





listarProductos();


