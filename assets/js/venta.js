/* -------- ARRAY OBJETOS VENTA ---------*/

const propiedadesAlquiler = [
  {
    src: "./assets/img/propiedadVenta1.jpeg",
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    caracteristicas: [" 4 Habitaciones |", " 4 Baños"],
    precio: "$5000",
    fumar: false,
    mascotas: false,
  },
  {
    src: "./assets/img/propiedadVenta2.webp",
    nombre: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    caracteristicas: [" 2 Habitaciones |", " 1 Baños"],
    precio: "$1.200",
    fumar: true,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadVenta3.avif",
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    caracteristicas: [" 3 Habitaciones |", " 3 Baños"],
    precio: "$4.500",
    fumar: false,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadVenta4.jpeg",
    nombre: "Casa de lujo en ambiente tranquilo",
    descripcion:
      "Esta casa de lujo ofrece un ambiente de paz y serenidad con entornos naturales",
    direccion: "74 Stanley Avenue. Ottawa (Ontario), K1M 1P4",
    caracteristicas: [" 5 Habitaciones |", " 4 Baños"],
    precio: "$2.500",
    fumar: true,
    mascotas: true,
  },
  {
    src: "./assets/img/propiedadVenta5.webp",
    nombre: "Casa de Moderna en el corazón de la ciudad",
    descripcion:
      "Esta casa ofrece espacio y comodidad en el centro de la ciudad",
    direccion: "2 Bloor Street East. Suite 1201.Toronto, Ontario M4W 1A8",
    caracteristicas: [" 3 Habitaciones |", " 3 Baños"],
    precio: "$3.500",
    fumar: false,
    mascotas: false,
  },
  {
    src: "./assets/img/propiedadVenta6.jpeg",
    nombre: "Condominio duplex maravilloso",
    descripcion: "Este duplex te ofrece todo el espacio y vista que necesitas",
    direccion: "4 main Street West. Suite 365.Toronto, Ontario M8W 1A2",
    caracteristicas: [" 2 Habitaciones |", " 2 Baños"],
    precio: "$1.700",
    fumar: true,
    mascotas: false,
  },
];

//------------------------- Ciclo

const contenedorVenta = document.querySelector("#listadoVenta");
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

contenedorVenta.innerHTML = html;
