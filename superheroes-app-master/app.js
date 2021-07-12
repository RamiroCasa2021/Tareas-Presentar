//Traigo de localStorage los datos si los hay
let heroes = JSON.parse(localStorage.getItem("heroes")) || [];

let heore={} //vairable global uso para eliminar

//Capturo cada elemento del formulario de registro
let alias = document.querySelector("#aliasText");
let nombre = document.querySelector("#nameText");
let poder = document.querySelector("#powerText");
let equipo = document.querySelector("#teamText");
let imagen = document.querySelector("#imgText");

//capturo el tbody de la tabla
let cuerpoTabla = document.querySelector("#cuerpoTabla") || "";

//Creo la clase para crear las instancias de heroe
class Heroe {
  constructor(alias, nombre, poder, equipo, imagen) {
    this.nombre = nombre;
    this.alias = alias;
    this.poder = poder;
    this.equipo = equipo;
    this.imagen = imagen;
  }
}

//Agregar heroes
const addHeroes = function () {
  if (alias.value && nombre.value && poder.value && equipo.value) {
    if (!imagen.value) {
      imagen.value =
        "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    }

    heroes.push(
      new Heroe(
        alias.value.toUpperCase(),
        nombre.value,
        poder.value,
        equipo.value,
        imagen.value
      )
    );
    localStorage.setItem("heroes", JSON.stringify(heroes));
    updateDatos();
  } else {
    alert("Faltan datos");
  }
};

function updateDatos() {
  alias.value = "";
  nombre.value = "";
  poder.value = "";
  equipo.value = "";
  imagen.value = "";
}

function cargarTabla() {
  cuerpoTabla.innerHTML = "";
  heroes = JSON.parse(localStorage.getItem("heroes")) || [];
  heroes.forEach(function (heroe, index) {
    let fila = document.createElement("tr");
    let datos = `
                <th scope="row">${heroe.alias}</th>
                <td>${heroe.nombre}</td>
                <td>${heroe.poder}</td>
                <td>${heroe.equipo}</td>
                <td>
                <button class="btn btn-warning" onclick='verHeroe(${index})'>Ver</button>
                </td>
                <button class="btn btn-danger" onclick='verHeroe(${index})'>X</button>
                </td>

               
`;
    fila.innerHTML = datos;

    cuerpoTabla.appendChild(fila);
  });
}

function verHeroe(id) {
 
  heroe=heroes[id];

  document.querySelector("#title_modal").innerText = heroe[id].alias;
  document.querySelector(".card-title").innerText = heroe[id].nombre;
  document.querySelector("#imagen_heroe").src = heroe[id].imagen;
  document.querySelector("#text_poder").innerText = heroe[id].poder;
  document.querySelector("#text_equipo").innerText = heroe[id].equipo;
  $("#heroeModal").modal("show");
}

function borrarHeroe(){
  
  heroe=heroes[id];

  let validar = confirm('Esta seguro que quiere borrar a ${heroe,alias}')

  if(validar){

    heroes.splice(id,1)
    localStorage.setItem('heroes', JSON.stringify(heroes))

    alert('se borro a &{}  ')

  }

}

if (cuerpoTabla) {
  cargarTabla();
}
