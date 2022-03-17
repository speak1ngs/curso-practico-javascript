// Codigo del cuadrado

//console.group agrupo mensajes
console.group("Cuadrados")
const ladosCuadrado = 5 ;
console.log("Los lados del cuadrado miden: " + ladosCuadrado + " cm");

const perimetroCuadrado = ladosCuadrado * 4 ;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladosCuadrado * ladosCuadrado;

console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");

console.groupEnd(); // finaliza la agrupacion

// Codigo triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6 ;
const ladoTriangulo2 = 6 ;
const ladoBase= 4 ;

console.log("Los lados del triangulo miden: "
 + ladoTriangulo1 + " cm, " 
 + ladoTriangulo2 + " cm, "
 + ladoBase + " cm");

 const alturaTriangulo = 5.5;

 console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = (ladoTriangulo1 * 2) + ladoBase;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (ladoBase * alturaTriangulo) / 2;
console.log("El area del triangulo es : " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
//radio
const radioCirculo =4;
//diametro
const diametroCirculo = radioCirculo *2;
//pi
const PI = Math.PI;
console.log("Las medidas del circulo son : " 
+ radioCirculo + " cm, " 
+ diametroCirculo + " cm, "
+ PI + " cm");
//circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del circulo es : " + perimetroCirculo + " cm");
//area
const areaCirculo = PI * (radioCirculo^2);

console.log("El area del circulo es : " + areaCirculo + " cm ^2");

console.groupEnd();