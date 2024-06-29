/* -------- ARRAY OBJETOS ALQUILER ---------*/

const propiedadesAlquiler = [
  {
    src: "./assets/img/propiedadAlquiler1.avif",
    nombre: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    caracteristicas: [" 2 Habitaciones |", " 2 Baños"],
    precio: "$2.000",
    fumar: false,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadAlquiler2.avif",
    nombre: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    caracteristicas: [" 3 Habitaciones |", " 3 Baños"],
    precio: "$2.500",
    fumar: true,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadAlquiler3.avif",
    nombre: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    caracteristicas: [" 2 Habitaciones |", " 2 Baños"],
    precio: "$2.200",
    fumar: false,
    mascotas: false,
  },
  {
    src: "./assets/img/propiedadAlquiler4.webp",
    nombre: "Apartamento acogedor",
    descripcion:
      "Este acogedor departamento tiene todo lo que necesitas para estar cómodo",
    direccion: "607 Wolf Willow Road. Edmonton, AB T5T 1E7",
    caracteristicas: [" 1 Habitaciones |", " 1 Baños"],
    precio: "$2.200",
    fumar: false,
    mascotas: false,
  },
  {
    src: "./assets/img/propiedadAlquiler5.jpeg",
    nombre: "Apartamento amplio y bien ubicado",
    descripcion:
      "Este hermoso apartamento tiene todo el espacio que necesitas sin alejarte de la ciudad",
    direccion: "2185 Capilano Road. North Vancouver, BC, V7P 3C1",
    caracteristicas: [" 3 Habitaciones |", " 2 Baños"],
    precio: "$3.200",
    fumar: false,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadAlquiler6.jpeg",
    nombre: "Casa de campo",
    descripcion:
      "Esta hermosa casa se encuentra ubicada en un entorno maravilloso y tranquilo",
    direccion: "1345 Hollis Street. Halifax (Nova Scotia) B3J 1T8",
    caracteristicas: [" 4 Habitaciones |", " 3 Baños"],
    precio: "$3.700",
    fumar: true,
    mascotas: true,
  },
];

//------------------------ Ciclo

const contenedorAlquiler = document.querySelector("#listadoAlquiler");
let html = "";

for (const propiedad of propiedadesAlquiler) {
  html += `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Foto de ${propiedad.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
       ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
      </p>
      <p>
        <i class="fas fa-bed"></i>${propiedad.caracteristicas[0]}
        <i class="fas fa-bath"></i> ${propiedad.caracteristicas[1]}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
      <p class="${
        propiedad.fumar ? "text-success" : "text-danger"
      }"><i class="${
    propiedad.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
  }"></i> ${propiedad.fumar ? "Permitido fumar" : "No se permite fumar"}
      </p>
      <p class="${propiedad.mascotas ? "text-success" : "text-danger"}">
          <i class="${propiedad.mascotas ? "fas fa-paw" : "fas fa-ban"}"></i>
          ${
            propiedad.mascotas
              ? "Mascotas permitidas"
              : "No se permiten mascotas"
          }
        </p>
    </div>
  </div>
</div>
    `;
}

contenedorAlquiler.innerHTML = html;
