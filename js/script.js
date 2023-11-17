//Corrección de DATA

import peliculas from "./peliculas.js"

//poster_path
//genre_ids
//title

const getfilterPelis = (idGenero, contenedorId ) => {
const contenedor = document.getElementById(contenedorId)
const peliculasGenero= peliculas.filter(pelicula => pelicula.genre_ids.includes(idGenero))

for (const element of peliculasGenero){
let templatePelis = `<div class= "pelicula">
<img src= "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="${element.title}"/>
<h3>${element.title}</h3>
</div>`

// Hay que tener cuidado con el innerHtml porque hace un repintado y te cambia lo que hay en el html
//importantisimo el += copia y suma todo lo que hay! Más igual está sumando a lo que hay cada vuelta
//cuidado si pusiera innerText o textcontent te devolvería solo en texto sin devolverte la imagen

contenedor.innerHTML += templatePelis;

}
}

getfilterPelis(28, "genero-28")
getfilterPelis(28, "genero-12")
getfilterPelis(28, "genero-53")




//otra forma de hacerlo seria

// const divAccion = document.getElementById('genero-28');
// const divThriller = document.getElementById('genero-53');
// const divAventura = document.getElementById('genero-12');


// peliculas.filter((element) => element.genre_ids.find((genre) => {
//   let titulo = document.createElement('p');
//   titulo.textContent = element.title;

//   let poster = document.createElement('img');
//   poster.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
//   poster.alt = `Poster de la película ${element.title}`;

//   let extra = document.createElement('p');
//   extra.innerHTML = `Estreno: ${element.release_date} <br /> Valoración: <strong>${element.vote_average}</strong>`;
//   extra.classList.add('oculto');

//   let divPeli = document.createElement('div');
//   divPeli.appendChild(titulo);
//   titulo.insertAdjacentElement('beforebegin', poster);
//   titulo.insertAdjacentElement('afterend', extra);
//   divPeli.classList.add('cartel');


//   if (genre === 28) {
//       divAccion.appendChild(divPeli);
//   } else if (genre === 53) {
//       divThriller.appendChild(divPeli);
//   } else if (genre === 12) {
//       divAventura.appendChild(divPeli);
//   }
// }))

