// Programación orientada a objetos
// Paradigma: Es un modelo a seguir para resolver una problematica.


// Modelos de paradigmas
// Programación Imperativa
// Describe paso a paso un conjunto de instrucciones para solucionar un problema

// clase

/**class Person2 {
    constructor (name){
        this.name = name
    }

    saludo(){
        return `Hola me llamo ${this.name}`
    }
}*/

// new : crea una instancia de una clase // No usar Mayusculas a menos que sea una instancia de un objeto

//const Lalo = new Person2("Eduardo").saludo()

//console.log(Lalo)


// Programación Declarativa
// Esta basado en funciones

/* Ejercicio 1
    1.- Crear una clase Person
    2.- Vamos a crear un método que salude con nuestro nombre
    3.- Vamos a crear un metodo que diga que edad tenemos
*/

/**class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    saludo(){
        return `Hola mi nombre es ${this.name} y tengo ${this.age} años`
    }
}

const laloD = new Person("Eduardo", 20).saludo()
console.log(laloD)*/

// Se pueden hacer operaciones dentro de los metodos.
// Los getters solamente deben retornar información no deben cambiar el estado de la clase.
// Para que la funcion de fecha con string funcione debe estar en formato amerciano "mm/dd/aaaa"

// Clase Padre

export class LivingBeing {
    constructor(height, weight){
        this.height = height
        this.weight = weight
    }

    calculoIMC (){
        return this.weight / (this.height*this.height)
    }
}

// Clase Hijo

// class define y crea una clase. (Clase hija)
export class Person3 extends LivingBeing {
    constructor(name, age, height, weight){
        // Solo cuando se extiende una clase debemos usar super
        super(height, weight)
        //this.name = name,
        //this.age = age
        //this.counter = 0
        //this.counterSaludo = 0
        //this.counterEdad = 0
    }
    /**saludo(){
        this.counterSaludo++
        return `Hola mi nombre es ${this.name}`
    }
    edad(){
        this.counterEdad++
        const actualYear = new Date().getFullYear()
        const birthYear = this.age
        // return `Tengo ${actualYear - birthYear} años de edad`
        return actualYear-birthYear
    }*/
    // Incrementar el valor cada vez que se llame
    /**incrementarCounter(){
        this.counter++
    }*/
    // los getters solamente deben retornar información no deben cambiar el estado de su clase.
   /**  get getCounter(){
        return this.counter
    }
    get getCounterSaludo(){
        return this.counterSaludo
    }
    get getCounterEdad(){
        return this.counterEdad
    }*/
    IMC(){
        // return super.saludoPadre()
        return super.calculoIMC()
    }
}

// new crea una instancia de una clase

export const laloDatos = new Person3("Eduardo",2001, 1.72, 60)
//console.log(laloDatos.saludo())
//console.log(`test ${laloDatos.edad()}`)


//laloDatos.incrementarCounter()
//laloDatos.incrementarCounter()
//laloDatos.incrementarCounter()
//laloDatos.incrementarCounter()


//console.log(laloDatos.getCounter)

/* Ejercicio 2
    1.- Sobre la misma clase creada
    2.- Crear un Getter que devuelva la cantidad de veces que han mandado a ejecutar "saludar()"
    3.- Crear un Getter que tambien devuelva la cantidad de veces que han mandado ejecutar "edad()"
*/

/**console.log(laloDatos.saludo())
console.log(laloDatos.saludo())
console.log(laloDatos.saludo())
console.log(laloDatos.saludo())

console.log(laloDatos.edad())
console.log(laloDatos.edad())
console.log(laloDatos.edad())


console.log(laloDatos.getCounterSaludo)
console.log(laloDatos.getCounterEdad)*/


// Imprimiendo 
console.log(laloDatos.calculoIMC())


/* Tarea 
    1.- Crear una clase Padre
    2. Crear una clase Hijo
    3.- Ejecutar un metodo de la clase padre en la clase hija
    4.- Calcular la masa corporal en la clase padre y retornar el resultado.
*/

 
console.log(`
//Imprimiendo el calculo de masa corporal del mentodo de la clase padre en la hija`+"  "+laloDatos.IMC())
