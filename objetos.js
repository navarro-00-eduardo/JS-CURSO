// objetos

/**var myObjectLalo={
    firstName:"LALO",
    lastName: "Navarro",
    "my age":27
}

// Acce a el valor de la propiedad firtName
console.log(myObjectLalo.firstName)


console.log(myObjectLalo["firstName"])
console.log(myObjectLalo["my age"])


// SObre escribe el valor de una propiedad en el objeto
myObjectLalo.firstName="Pilar"

console.log(myObjectLalo.firtName)



myObjectLalo.hobbies="bailar"

console.log(myObjectLalo)

/**
 * ejercicio 1
 * 1 crear un objeto con su informacion personal
 * 2 remplazar el valor de una propiedad de su objeto
 * van a crear una prpieda no existente en su objeto
 * van a imprimir la propiedad creada e imprimir la propiedad con el valor
 * remplazado (2 console.log)
 * imprimir todo el objeto al final
 * 
 * 
 */

 var infoLalo={
    firstName:"Eduardo",
    lastName: "Navarro",
    edad:27
}
infoLalo.firstName="Alexis"

infoLalo.musica="singenero"

//console.log(infoLalo.musica)
//console.log(infoLalo)


//Borrar o quitar  propiedades
delete infoLalo.edad
console.log(infoLalo)


infoLalo.address={
    street:"rivera",
    colonia:"js",
    ciudad:"alisco"
}



