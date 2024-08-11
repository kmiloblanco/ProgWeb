//PRIMER EJEMPLO
function contrasenaValida(contrasena) {
    return contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9";
}

console.log(contrasenaValida("2Fj(jjbFsuj"))
console.log(contrasenaValida("eoZiugBf&g9"))
console.log(contrasenaValida("hola"))
console.log(contrasenaValida(""))


//SEGUNDO EJEMPLO

function calcularImpuestos(edad, ingresos){
    if(edad >= 18 && ingresos >= 1000 ) {
        return ingresos* 0.4;
    }
    else return 0;

}

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

//TERCER EJEMPLO

function bmi(peso, altura){
    const bmiValor = peso / (altura^2);
    if ( bmiValor <= 18.5) { 
        return "usted tiene bajo peso"; 
    } 
    else if (bmiValor >= 18.5 && bmiValor <= 24.9) { 
        return "tiene peso normal";
    }
    else if (bmiValor >= 25 && bmiValor <= 29.9) { 
        return "tiene sobrepeso"; 
    } 
    else { 
        return "usted esta obeso"; 
    }
}

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"

//CUARTO EJEMPLO

function imprimirArreglo(arreglo) {
    let arreglo = ["1", "hola", "2", "mundo"]
}

// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);
console.log(arreglo);
// Salida:
// 1
// Hola
// 2
// Mundo


//QUINTO EJEMPLO
function likes(numero) {
    if (numero >= 1000000) {
        return Math.floor(numero / 1000000) + "M";
    } else if (numero >= 1000) {
        return Math.floor(numero / 1000) + "K";
    } else {
        return numero.toString();
    }
}

// código de prueba
console.log(likes(983));      // "983"
console.log(likes(1900));     // "1K"
console.log(likes(54000));    // "54K"
console.log(likes(120800));   // "120K"
console.log(likes(25222444)); // "25M"

//SEXTO EJEMPLO

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero;
    }
}

// código de prueba
console.log(fizzBuzz(6));  // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8));  // 8

//SEPTIMO EJMPLO
function contarRango(inicio, fin) {
    let contador = 0;
    for (let i = inicio + 1; i < fin; i++) {
        contador++;
    }
    return contador;
}

// código de prueba
console.log(contarRango(1, 9));      // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6));       // 0


//OCTAVO EJEMPLO
function sumarRango(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}

// código de prueba
console.log(sumarRango(0, 10));  // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5));   // 5

//NOVENO EJEMPLO
function NumeroDeAes(valor){
    let contador = 0;
    for( let i = 0; i< valor.length; i++){
        if ( valor[i] === "a"){
            contador++;
        }
    }
    return contador;
}

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0

//DECIMO EJEMPLO
function verificarCadena(cadena) {
    if (1 < cadena.length) {
        console.log("La cadena tiene más de un carácter.");
    } else if (cadena.length === 0) {
        console.log("La cadena no tiene ningún carácter.");
    }
    else{
        console.log("la cadena tiene uno o ninguno caracter")
    }
}

// Código de prueba
verificarCadena("Hola"); // La cadena tiene más de un carácter.
verificarCadena("A");    // La cadena tiene uno o ningún carácter.
verificarCadena("");     // La cadena no tiene ningún carácter.


