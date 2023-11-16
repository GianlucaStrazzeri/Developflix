import peliculas from './peliculas.js'

//Consolelog n1 Cuando lo imprimo en la consola me aparecen todos los objetos con las peliculas
console.log(peliculas);

//Creada la constante generoContainer que engloba el dom genero-container
const generoContainer= document.querySelectorAll(".genero-container");

//Consolelog n2 imprimo en la consola la constante generoContainer para ver que contiene
console.log(generoContainer); // salen 3 elementos en la consola length:3

//Creada la constante genero que engloba el dom genero
const genero=document.querySelectorAll(".genero");

//Consolelog n3 imprimo en la consola la constante genero para ver que contiene
console.log(genero) // salen 3 elementos en la consola length: 3

//Creada la constante pelisDeAcción  vinculada con el dom a través de getElementById
const pelisDeAcción= document.getElementById("genero-28");

//Consolelog n4
console.log(pelisDeAcción)

//Creada la constante pelisDeThriller  vinculada con el dom a través de getElementById
const pelisDeThriller= document.getElementById("genero-53");

//Consolelog n5
console.log(pelisDeThriller )

//Creada la constante pelisDeAventura vinculada con el dom a través de getElementById
const pelisDeAventura= document.getElementById("genero-12");


//Consolelog n6
console.log(pelisDeAventura )



  pelisDeAventura.innerHTML =
  peliculas;

  pelisDeThriller.innerHTML =
  "Titulo: " + peliculas[0].title;
  
 //Creo una variable filtrada con filter por todos los elementos del objeto por genero que incluya el genero 28
 // includes es un metodo de js para incluir un determinado elemento en principio debe de retornar tue o false
 let generoAventura= peliculas.filter(elemento => elemento.genre_ids.includes = 28);

 
 //Consolelog n Imprime todos los objetos uno a uno en la consola creando 20 objetos separados
//for (let genre_ids in peliculas) {
 //console.log(genre_ids + ": " + peliculas[genre_ids]);
//}
  
 
//Consolelog n
 //console.log(peliculas.filter(element => element.genre_ids = 56));

  



 //ESTRUCTURA FOR IN //NO ME FUNCIONA
 
//for (peliculas.original_title in peliculas)
 //  pelisDeAcción.InnerHtml((`${original_title}: ${peliculas[original_title]}`));
//}
 
// a parte de iterar tendría que saber como filtrarlo con filter();
 

  //let functionTitulos= function (i,peliculas){
 //   for(i=0,i<peliculas.length;i++){
 //     return peliculas[i].title
 //   }
 // }
 // console.log(functionTitulos());


//pelisDeAcción.innerHTML=
//"<img href=https://image.tmdb.org/t/p/w500/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg height:500px width:500px>";

 


