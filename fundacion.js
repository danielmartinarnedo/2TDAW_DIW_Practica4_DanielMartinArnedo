//VARIABLES
const sliderwrapper = document.querySelector("div.swiper-wrapper");
const contenidos = {
    Presidente: {
        0: {
            name: "David Jiménez-Blanco Carrillo de Albornoz",
            role: "Presidente de la Bolsa de Madrid",
            details: "Vicepresidente del grupo BME, Presidente de Gawa Capital, Presidente del Consejo Asesor de CUNEF Universidad.",
            imagen: "img/DavidJiménezBlancoCarrillodeAlbornoz.jpg"
        }
    },
    Vicepresidentes: {
        0: {
            name: "Vicente Azpitarte Pérez",
            role: "Vicepresidente institucional, Senador del Reino de España por Granada",
            details: "Periodista deportivo y exdelegado del Gobierno de Andalucía en Madrid. Autor del libro 'Luka Modric: El hijo de la guerra'.",
            imagen: "img/VicenteAzpitartePerez.jpg"
        },
        1: {
            name: "Juan de Dios Gómez-Villalba Pelayo",
            role: "Vicepresidente económico, Managing Director de Goldman Sachs",
            details: "Responsable de Banca de Inversión en Iberia. Graduado en Derecho y Ciencias Económicas (ICADE E-3).",
            imagen: "img/JuandeDiosGomezVillalbaPelayo.jpg"
        }
    },
    Patronato: {
        0: {
            name: "Rafael Salinas Martínez de Lecea",
            role: "Ex-Chief Financial Officer (CFO) de BBVA",
            details: "Consejero de GarantiBBVA y BBVA México.",
            imagen: "img/RafaelSalinasMartinezdeLecea.jpg"
        },
        1: {
            name: "Yolanda Romero Gómez",
            role: "Conservadora del Banco de España",
            details: "Historiadora del arte y exdirectora del Centro de Arte Contemporáneo José Guerrero de Granada.",
            imagen: "img/YolandaRomeroGomez.jpg"
        },
        2: {
            name: "Pilar Martínez-Cosentino Alfonso",
            role: "Vicepresidenta Ejecutiva del Grupo Cosentino",
            details: "Premio Mujer Empresaria Caixabank 2021 y Bandera de Andalucía 2022.",
            imagen: "img/PilarMartinezCosentinoAlfonso.jpg"
        },
        3: {
            name: "Estrella Morente Carbonell",
            role: "Artista y figura destacada del flamenco",
            details: "Ganadora de múltiples premios como el Premio Ondas y la Medalla de Andalucía.",
            imagen: "img/EstrellaMorente.jpg"
        },
        4: {
            name: "Celia Correa Góngora",
            role: "Presidenta de Honor del Centro Artístico, Literario y Científico de Granada",
            details: "Escritora e investigadora especializada en patrimonio granadino y el matrimonio Juan Ramón Jiménez-Zenobia Camprubí.",
            imagen: "img/CeliaCorreaGongora.jpg"
        },
        5: {
            name: "Pilar Aranda Ramírez",
            role: "Catedrática de Fisiología y exrectora de la Universidad de Granada",
            details: "Ha recibido múltiples reconocimientos, incluida la Gran Cruz del Mérito Militar.",
            imagen: "img/PilarArandaRamirez.jpg"
        },
        6: {
            name: "Manuel Saucedo Carretero",
            role: "Director del WiZink Center de Madrid",
            details: "Exdirector del diario 'Marca' y responsable de lanzamientos como Marca.com y Marca TV.",
            imagen: "img/ManuelSaucedoCarretero.jpg"
        },
        7: {
            name: "José María Álvarez-Pallete López",
            role: "Presidente de Telefónica",
            details: "Presidente de la Fundación Telefónica y el Consejo de GSMA, entre otros reconocimientos.",
            imagen: "img/JoseMariaAlvarezPalleteLopez.jpg"
        }
    },
    Secretario_del_Patronato: {
        0: {
            name: "Marcos Galera López",
            role: "Director General de Agaz Abogados, Granada",
            details: "Socio fundador del Grupo A.",
            imagen: "img/MarcosGaleraLopez.jpg"
        }
    }
}
console.log(contenidos)
//CODIGO COMUN
// Bucle para cojer cada categoria del contenido
Object.keys(contenidos).forEach((categoria) => {
    const datos = Object.values(contenidos[categoria]); //Conseguir todas las personas de la categoria
    //PROCESAR CATEGORIA PARA QUE SE VEA BIEN
    let mayus=categoria.toUpperCase();
    let separado=mayus.split("_")
    let clave=separado.join(" ")
    //Coger las personas para el slider
    for (let i = 0; i < datos.length; i += 2) {
        const actual = datos[i];
        const siguiente = datos[i + 1]; //Conseguir la siguiente persona
        // Generar un slide
        let slideHTML = `
            <div class="swiper-slide" data-swiper-autoplay="5000">
                <h2>${clave}</h2>
                <div>
                    <div>
                        <img src="${actual.imagen}" alt="">
                        <h3>${actual.name}</h3>
                        <p>${actual.role}</p>
                    </div>`;

        if (siguiente) {
            slideHTML += `
                <div>
                    <img src="${siguiente.imagen}" alt="">
                    <h3>${siguiente.name}</h3>
                    <p>${siguiente.role}</p>
                </div>`;
        }

        slideHTML += `
                </div>
            </div>`;

        sliderwrapper.innerHTML += slideHTML; // Añadir el slide
    }
});