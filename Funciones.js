










//function congelar ( alimento ) {

    //return "congelado" + alimento
//}
//var polloCongelado = congelar( "pollo" )
//console.log(   polloCongelado   )



/**
 * ejercicio 1
 * 1 Vamos a saludar a 3 personas distintas usando una funcion
 * 2 la funcion recibira un parametro de tipo string
 * 3 Hacer console . log de los saludos fuera de la funcion
 */

/**function saludo ( persona ) {

    return "hola" + " " + persona
}
var saludo1 = saludo( "alex" )
var saludo2 = saludo( "lalo" )
var saludo3 = saludo( "diana" )

console.log(   saludo1  )
console.log(   saludo2  )
console.log(   saludo3  )

/**
 * ejercicio 2
 * crear una funcion que retornes la edad de las personas 
 * la funcion debe retornar la edad sin tomar en cuenta los meses o dias
 */
//function Año ( EDAD ) {

    //return "TIENES" + " " + EDAD
//}
//var edad1 = Año( "20" )
//var edad2 = Año( "21" )
//var edad3 = Año( "22" )

//console.log(   edad1  )
//console.log(   edad2  )
//console.log(   edad3  )

 
//function calcularEdad ( Año) {
    //var actualAño = new Date().getFullYear()
    
    

    //return `TIENES ${actualAño-Año} años`
//}
//var resultado = calcularEdad(1993)

//console.log(   resultado )

/**
 * ejercicio 3
 * 1 Hacer una funcion que reciba 2 parametros y devuelva el numero mayor
 * 2 La funcion debera retornar un valor de tipo de number
 */
/** 
 function getMax(valor, valor1) {
     if (valor>valor1) {
        return `es mayor ${valor} que ${valor1}`
  
     }else{
        return `es mayor ${valor1} que  ${valor}`
     }
     
 }
 var a=getMax(100,1)
 var b = getMax(1,2)

 console.log(a)
 console.log(b)

 const getMax = () =>{

 }
 /**
  * EHERCICIO 4 
  * Utilizando arrow function en todas las funciones
  * remplazar las 3 funciones que ya tenemos en arrow functions
  */


/**function saludo ( persona ) {

    return "hola" + " " + persona
}
var saludo1 = saludo( "alex" )
var saludo2 = saludo( "lalo" )
var saludo3 = saludo( "diana" )

console.log(   saludo1  )
console.log(   saludo2  )
console.log(   saludo3  )
*/

//ejercicio 1
const saludo = (persona) =>"hola" + " " + persona

    var saludo1 = saludo( "alex" )
    var saludo2 = saludo( "lalo" )
    var saludo3 = saludo( "diana" )

    console.log(   saludo1  )
    console.log(   saludo2  )
    console.log(   saludo3  )
//function Año ( EDAD ) {

    //return "TIENES" + " " + EDAD
//}
//var edad1 = Año( "20" )
//var edad2 = Año( "21" )
//var edad3 = Año( "22" )

//console.log(   edad1  )
//console.log(   edad2  )
//console.log(   edad3  )*/


//ejercicio 2
const Año = (edad)=>{
    
    return "TIENES" + " " + edad
}
var edad1 = Año( "20" )
var edad2 = Año( "21" )
var edad3 = Año( "22" )

console.log(   edad1  )
console.log(   edad2  )
console.log(   edad3  )



    

//ejercicio3
const getMax = (valor,valor1) =>{
    if (valor>valor1) {
        return `es mayor ${valor} que ${valor1}`
  
     }else{
        return `es mayor ${valor1} que  ${valor}`
     }
     
 }
 var a=getMax(100,1)
 var b = getMax(1,2)
 
 console.log(a)
 console.log(b)

//function calcularEdad ( Año) {
    //var actualAño = new Date().getFullYear()
    
    

    //return `TIENES ${actualAño-Año} años`
//}
//var resultado = calcularEdad(1993)

//console.log(   resultado )*/

const calcularEdad = (year) =>{ 
    var actualYear = new Date().getFullYear()
    return `TIENES ${actualYear-year} años`
}
var resultado = calcularEdad(1993)

console.log(   resultado )
    




