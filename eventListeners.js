/**document.getElementById("my-title").addEventListener('click',() =>{
    const nombre= prompt("¿dime?")
    console.log("nombre====>", nombre)

})*/
import{LivingBeing}from"./opp.js"
console.log(LivingBeing)   
import{Person3}from"./opp.js"
console.log(Person3)   
//import {laloDatos}from"./opp.js"
/** 
document.getElementById("my-title").addEventListener('click', () => {
    const nombre = prompt("Cual es tu nombre?")
    console.log("Nombre ===>", nombre)
  })*/


  const labelGlobo = document.getElementById("globo")
  let ballonSize = 10
  

  
  labelGlobo.addEventListener('click', () => {
    // ballonSize = ballonSize + 5
    ballonSize += 5
    console.log("Llamando globo", ballonSize)
    // labelGlobo.style.fontSize = ballonSize + "px"
    // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
  })

  /**const labelGlobo = document.getElementById("globo")*/

  /** 
  labelGlobo.addEventListener('mouseout', () => {
    // ballonSize = ballonSize + 5
    ballonSize -= 5
    console.log("Llamando globo", ballonSize)
    // labelGlobo.style.fontSize = ballonSize + "px"
    // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
  })
*/

  
  const altura = document.getElementById("height")
  const peso = document.getElementById("weight")
  const resultText = document.getElementById("result-addition")
  const resultText1= document.getElementById("ideal")
  const imc = document.getElementById("imc")
  const lectura = document.getElementById("lectura")
  let valuePeso = 0
  let valueAltura = 0
  
  
  altura.addEventListener("input", (event) => {
    // valueAltura = +event.target.value
    valueAltura = Number(event.target.value)
    //console.log("Event ==>", valueAltura)
    resultText.textContent = valuePeso/(valueAltura*valueAltura)
  
    laloDatos = new Person3
    resultText.textContent = datos.laloDatos.calculateIMC()
   
  })

  peso.addEventListener("input", (event) => {
    valuePeso = Number(event.target.value)
    //console.log("Event ==>", valuePeso)
    resultText.textContent = valuePeso/(valueAltura*valueAltura)
    if(imc<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
			else if(imc>=18.5 && imc<=24.9){ lectura.innerHTML = "Peso normal"; }
			else if(imc>=25 && imc<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
			else if(imc>30){ lectura.innerHTML = "Obesidad"; }

  })
    

//console.log(laloDatos)