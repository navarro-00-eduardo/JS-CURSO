/**console.log("Bienvenido")
//var parrafos=document.body.getElementsByTagName("p")
var parrafos=document.body.querySelectorAll("p")


console.log("parrafos ===>",parrafos)



parrafos.forEach((p,index) => { 

    p.innerText=`El contenido es : ${p.innerText} y se encuentra en la posicion${index}`        
})

// Crear nuevos elementos de HTML
// 1.- Crear el elemento de HTML que deseo. En este caso un paragraph nuevo
const myNewParagraph = document.createElement("p") // <p></p>

// 2.- Agregamos un nodo de texto y lo guardamos en una variable
const textParagraph = document.createTextNode("Hola Mundo") // "Hola Mundo"

// A paragraph estoy agregando el texto <p></p> agregale "Hola Mundo" adentro 
// 3.- Agregamos el texto al <p></p>
myNewParagraph.appendChild(textParagraph)

// 4.- Agregamos myNewParagraph => <body> <p>"Hola Mundo"</p> </body>
document.body.appendChild(myNewParagraph)

// setAttribute

*/

/** 
const nuevoP=document.createElement("p")
const textP= document.createTextNode("hola")

nuevoP.appendChild(textP)
document.body.appendChild()


*/



/** 
const myNewA = document.createElement("a") 
myNewA.setAttribute("href", "http://www.google.es")

const Atexto = document.createTextNode("Hola Google") 

myNewA.appendChild(Atexto)

document.body.appendChild(myNewA)*/

var body = document.getElementsByTagName("body")
// Creamos un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
// Creamos las celdas
for (var i = 0; i < 2; i++) {
    // Creamos las hileras de la tabla
    var fila = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, hace que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(" ---- " );
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }
  // agregamos la hilera al final de la tabla (al final del elemento tblbody)
  tblBody.appendChild(fila);
  }
  // posicionamos el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  tabla.setAttribute("id", "tabla");
  var result = document.getElementById("resultado");
  result.appendChild(tabla);
