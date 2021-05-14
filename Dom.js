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

const Atexto = document.createTextNode("Buscar en Google") 


myNewA.appendChild(Atexto)


document.body.appendChild(myNewA)*/
 
var body = document.getElementsByTagName("body")[0]

var tabla = document.createElement("table")
var tblBody = document.createElement("tbody")

for (var i = 0; i < 2; i++) {
    
    var fila = document.createElement("tr")
    for (var j = 0; j < 2; j++) {
     
      var celda = document.createElement("td")
      var textoCelda = document.createTextNode(" ---- " )
      celda.appendChild(textoCelda)
      fila.appendChild(celda)
    }
  
  tblBody.appendChild(fila);
  }
  
  tabla.appendChild(tblBody);
 
  body.appendChild(tabla);
  
  tabla.setAttribute("border", 2);
  tabla.setAttribute("id", "tabla");
 
