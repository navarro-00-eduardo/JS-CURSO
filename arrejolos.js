//Arreglos o listar
//var myArray =[1,2,3,]
//console.log(myArray[4])
/**var myArray =[
  {nombre:"lalo"},
  {nombre:"lalote"},
  {nombre:"lalito"}
  
 
  ]
//console.log(myArray[0])
//console.log(myArray[1])
//console.log(myArray[2])


/**
 * 
 * Ejercicio 2
 * 1 vamos a crear un arreglo con 10 elementos dentro de cualquier tipo de datos
 * van a imprimir lo que arrojaria ese arreglo en ciertapocicion 5 ejemplos
 * 
 * 
 */
/**var myArray =[1,2,3,4,5,6,7,8,9,10]
console.log(myArray[1]) //2
console.log(myArray[2])//3
console.log(myArray[3])//4
console.log(myArray[4])//5
console.log(myArray[5])//6

//console.log(myArray.length)

/**for (var x = 0; x < 10; x++){
    console.log("espera")
}
console.log("hola")


/**
 * ejercicio 3
 * 1 sobre el arreglo de 10 elementos 
 * 2crear un for que imprima cada elemento de su arreglo
 *Quiero que me imprima de ultimo a primero
 */


//for (var x =myArray.length -1; x>=0; x--){

   // console.log(myArray[x])
//}


/**
 * ejercicio 4 
 * crear un array nuevo con numeros del 1 al 10
 * multiplicar los numeros por ellos mismos es decir
 */
 const myArray =[1,2,3,4,5,6,7,8,9,10]
for(let x=0 ; x<myArray.length; x++){
    
    const element=myArray[x];
    console.log(element*element)

}