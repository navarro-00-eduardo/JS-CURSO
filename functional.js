


/**var myName="lalo"
console.log("before renombrar ===>", myName)

function renombrar  (myName) {
    nombre = "hola"
    return myName
}
 renombrar(myName)

 console.log("after renombrar ===>")
   
//NOTIENE QUE HACERCE
    var aNumbers= [1,2,3]
    console-log("before multiplicar ===>", aNumbers)
   
    const multiplicar =(numbers) =>{

    for (var i=0; i<numbers.length; i++){
       numbers[i]=numbers[i]*2
   }
   multiplicar(aNumbers)
   console.log ("after multiplicar ===>", aNumbers)


 }


   const multyply=(num)=>{
       return num*=2

   }
   console.log(multyply(2))
   console.log(multyply(2))
   console.log(multyply(2))*/

   /**ejercicio 1
   1 en una funcion pura devolver la multiplicacion[1,5,6] *2 en un nuevo array sin modificar el input
   2 en otra funcion devolver la suma de un lnumero sin alterar el input origina
   */

   /*var num =[1,5,6]
   function F1(num) {
       return 2*num
       
   }
   console.log(F1(1))
   console.log(F1(5))
   console.log(F1(6))


   
   /**const Sum=(num)=>{
    return num+2

}
console.log(Sum(2))
console.log(Sum(4))
console.log(Sum(8))*/


/**
 * Ejercicio 2
 * 1.- hacer que el object que retorne la función no mute el input original
 * Tiempo: 15min
 

const myObj = {
    name: "Bryan"
  }
  Object.freeze(myObj)
  
  console.log("Before setProp ===>", myObj)
  
  // Reference
  const setProp = (obj) => {
    const myNewObj = obj
  
    myNewObj.hobbies = ['Read', 'Walk']
  
    return myNewObj
  }
  
  
  const myNewObj = setProp(myObj)
  
  
  console.log("After setProp ===>", myNewObj)
  console.log("After setProp ===>", myObj)*/
  /** 
 * Ejercicio Tarea
 *  Ejemplo de arreglo: [15, 500, 95, 87, 34, 76]
 * 1.- Crear una función que retorne un arreglo iterado por un map que devuelva el numero al cuadrado
 * 2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior
 * 3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado
 * IMPORTANTE: Tarea para el martes
 */
// MAP
/** 
const multiply = (array) => {
  // map retorna un arreglo nuevo
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const resultsArray = array.map((numero) => {
     //numero = 3
    return numero * numero
  })

  return resultsArray
}

const myOriginalArray = [15, 500, 95, 87, 34, 76]

const result = multiply(myOriginalArray)
 console.log("Result ===>", result)
 console.log("Resultoriginal ===>", myOriginalArray)


// FILTER
const filterNumber = (array) => {
  const resultsArray = array.filter((numero) => {
    if (numero % 2 ) {
      return numero
    }
  })

  return resultsArray
}
const myOriginalArray=[ 225, 250000, 9025, 7569, 1156, 5776 ]
const resultFilter = filterNumber(myOriginalArray)
 
 console.log("resultFilter ===>", resultFilter)
 console.log("myOriginalArray ===>", myOriginalArray)

/** 
// REDUCE
// ["Bryan", "Montes", "Velazquez"]
const reduceNumber = (array) => {
  // ["Bryan", "Montes", "Velazquez"]
  const resultSuma = array.reduce((accumulador, valorActual) => {
    // 1era vez acumulador tiene 0 y valorActual tiene 1
    // return acumulador = 0 + 1
    // 2da vez acumulador tiene 1 y valorActual tiene 2
    // return acumulador = 1 + 2
    // 3ra vez acumulador tiene 3 y valorActual tiene 3
    // return acumulador = 3 + 3
    return accumulador = accumulador + " " + valorActual
  }, 0)

  return resultSuma
}

const resultReduced = reduceNumber(myOriginalArray)

console.log("resultReduced ===>", resultReduced)
console.log("myOriginalArray ===>", myOriginalArray)*/


//1.- Crear una función que retorne un arreglo iterado por un map que devuelva el numero al cuadrado
console.log("hola")
const multiply = (array) => {
  // map retorna un arreglo nuevo
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const resultsArray = array.map((numero) => {
     //numero = 3
    return numero * numero
  })

  return resultsArray
}

const myOriginalArray = [15, 500, 95, 87, 34, 76]

const result = multiply(myOriginalArray)
 
console.log("ArrayOriginal ===>", myOriginalArray)
console.log("Result ===>", result)
 




// 2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior
console.log("2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior")
const filterNumber = (array) => {
  const resultsArray = array.filter((numero) => {
    if (numero % 2 ) {
      return numero
    }
  })

  return resultsArray
}
const myOArray=[ 225, 250000, 9025, 7569, 1156, 5776 ]
const resultFilter = filterNumber(myOArray)
 

console.log("ArrayOriginal ===>", myOArray)
 console.log("resultFilter ===>", resultFilter)
 


//3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado
console.log("3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado")
const array1 = [225, 9025, 7569];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(("SumaImpares ===>"), array1.reduce(reducer));

console.log(("Raiz ===>"),Math.sqrt(array1.reduce(reducer )) );
