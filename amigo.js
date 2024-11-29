const subcripcion = {
  subscriptions: {
    personal: {
      0: {
        name: "Amigo Joven",
        cost: "15 €/año (12 € desgravables)",
        requirements: "Hasta 18 años.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-id-card"></i>`,
            name: "Carnet personalizado"
          },
          {
            icon: `<i class="fa-solid fa-chalkboard-user"></i>`,
            name: "Acceso a eventos educativos sobre la Alhambra"
          },
          {
            icon: `<i class="fa-solid fa-paint-brush"></i>`,
            name: "Descuentos en talleres especializados"
          }
        ]
      },
      1: {
        name: "Amigo Estudiante",
        cost: "25 €/año (20 € desgravables)",
        requirements: "Hasta 25 años o egresados universitarios antes de los 25 años. Estudiantes de cualquier universidad española o Erasmus de la UGR.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-id-card"></i>`,
            name: "Carnet personalizado"
          },
          {
            icon: `<i class="fa-solid fa-handshake"></i>`,
            name: "Eventos de networking y voluntariado"
          },
          {
            icon: `<i class="fa-solid fa-ticket"></i>`,
            name: "Descuentos en actividades culturales"
          },
          {
            icon: `<i class="fa-solid fa-users"></i>`,
            name: "Colaboración en la comunidad virtual de Amigos de la Alhambra"
          }
        ]
      },
      2: {
        name: "Guardián de la Alhambra",
        cost: "100 €/año (80 € desgravables)",
        requirements: "A partir de 25 años.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-id-card"></i>`,
            name: "Carnet personalizado"
          },
          {
            icon: `<i class="fa-solid fa-gift"></i>`,
            name: "Welcome Pack (paquete de bienvenida)"
          },
          {
            icon: `<i class="fa-solid fa-book"></i>`,
            name: "Descuentos en entradas a actividades, conferencias y publicaciones"
          },
          {
            icon: `<i class="fa-solid fa-calendar-check"></i>`,
            name: "Invitación a la recepción anual con acceso al 'Libro de firmas'"
          }
        ]
      },
      3: {
        name: "Familia Amiga",
        cost: "200 €/año (160 € desgravables)",
        requirements: "A partir de 25 años. Incluye a dos adultos y tres menores de 18 años de la unidad familiar.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-id-card"></i>`,
            name: "Carnet personalizado"
          },
          {
            icon: `<i class="fa-solid fa-gift"></i>`,
            name: "Welcome Pack"
          },
          {
            icon: `<i class="fa-solid fa-child"></i>`,
            name: "Descuentos en entradas, publicaciones, talleres y actividades infantiles"
          },
          {
            icon: `<i class="fa-solid fa-calendar-check"></i>`,
            name: "Invitación a la recepción anual con acceso al 'Libro de firmas'"
          },
          {
            icon: `<i class="fa-solid fa-graduation-cap"></i>`,
            name: "Acceso exclusivo a eventos educativos, networking, voluntariado y guías expertos"
          }
        ]
      },
      4: {
        name: "Círculo 1238",
        cost: "Primer año: 1.000 €, A partir del segundo año: 150 €/año (120 € desgravables)",
        requirements: "A partir de 25 años.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-id-card"></i>`,
            name: "Carnet personalizado"
          },
          {
            icon: `<i class="fa-solid fa-gift"></i>`,
            name: "Welcome Pack"
          },
          {
            icon: `<i class="fa-solid fa-book"></i>`,
            name: "Descuentos en actividades, publicaciones y cursos infantiles"
          },
          {
            icon: `<i class="fa-solid fa-calendar-check"></i>`,
            name: "Invitación a la recepción anual con acceso al 'Libro de firmas'"
          },
          {
            icon: `<i class="fa-solid fa-landmark"></i>`,
            name: "Visita privada anual en grupo al conjunto monumental de la Alhambra"
          },
          {
            icon: `<i class="fa-solid fa-chart-pie"></i>`,
            name: "Participación en encuestas para diseñar exposiciones y eventos"
          },
          {
            icon: `<i class="fa-solid fa-coffee"></i>`,
            name: "Desayuno con la dirección de la Alhambra"
          },
          {
            icon: `<i class="fa-solid fa-star"></i>`,
            name: "Preferencia en la compra de entradas VIP para conciertos seleccionados"
          }
        ]
      }
    },
    empresa: {
      0: {
        name: "Empresas e Instituciones",
        cost: "Personalizado",
        requirements: "Ser una empresa o institución interesada en colaborar con la Fundación Amigos de la Alhambra.",
        benefits: [
          {
            icon: `<i class="fa-solid fa-handshake-angle"></i>`,
            name: "Co-branding: Eventos corporativos exclusivos y visibilidad en actividades"
          },
          {
            icon: `<i class="fa-solid fa-book-open"></i>`,
            name: "Publicaciones especiales: Materiales relacionados con la Alhambra y Granada"
          },
          {
            icon: `<i class="fa-solid fa-award"></i>`,
            name: "Reconocimiento público: Mención en la web y memoria anual"
          },
          {
            icon: `<i class="fa-solid fa-bullhorn"></i>`,
            name: "Agradecimiento en actos públicos realizados por la Fundación"
          },
          {
            icon: `<i class="fa-solid fa-globe"></i>`,
            name: "Logotipo en la página web de la Fundación"
          },
          {
            icon: `<i class="fa-solid fa-users-cog"></i>`,
            name: "Condiciones ventajosas para empleados interesados en ser Amigos de la Fundación"
          },
          {
            icon: `<i class="fa-solid fa-briefcase"></i>`,
            name: "Atención personalizada: Organización de visitas institucionales adaptadas"
          }
        ]
      }
    }
  }
}

const subEspecifico = document.querySelector("div.subEspecifico");
let botonAnterior = document.querySelector("button#subJoven");
let cambio;

function cambioEspecifico (valor){
  let separado=valor.split("-");
  let parte=separado[0]
  let tipo=separado[1]
  let id=separado[2]
  actual=subcripcion.subscriptions[parte][tipo];
  let texto=`<h2>${actual.name}</h2>
            <h3>PRECIO</h3>
            <p class="resalto">${actual.cost}</p>
            <p>${actual.requirements}</p>
            <table>`;
  actual.benefits.forEach(element => {
            texto+=`<tr><td>${element.icon}</td><td>${element.name}</td></tr>`;
  });
  texto+="</table>"           
  subEspecifico.innerHTML=texto;
  cambioBoton(id)
}
function cambioBoton(id) {
  const botonActual = document.getElementById(id);
  botonAnterior.classList.toggle("subBotonBlanco");
  botonActual.classList.toggle("subBotonBlanco")
  botonAnterior=botonActual;
}

document.addEventListener('DOMContentLoaded', function() {
  cambioEspecifico("personal-0-subJoven");
});