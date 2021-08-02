//URL API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la api
const getData = (api) => {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json.results), paginacion(json);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })

};

// Dibujar cards de personajes
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });

    document.getElementById("datosPersonajes").innerHTML = html;
};

//Paginacion
const paginacion = (data) => {

    let prevDisabled = "";
    let nextDisabled = "";
    if (data.prev == null) {
        prevDisabled = "disabled"
    } else {
        prevDisabled = "";
    }
    if (data.next == null) {
        nextDisabled = "disabled"
    } else {
        nextDisabled = "";
    }
    let html = "";
    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${data.prev}')"> Previous </a></li>`;
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${data.next}')"> Next </a></li>`;

    document.getElementById("paginacion").innerHTML = html;
};

//llamar getData
getData(API);