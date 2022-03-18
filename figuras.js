// Codigo del cuadrado

//console.group agrupo mensajes
console.group("Cuadrados")

var calculoFigura = prompt("Ingrese una figura si desea calcular o 0 para finalizar");
while(calculoFigura !=0){

        switch(calculoFigura)
        {
             case "cuadrado":
                console.group("cuadrado");
                const ladosCuadrado = prompt("Ingrese la dimension del cuadrado");
                console.log("Los lados del cuadrado miden: " + ladosCuadrado + " cm");
                
                function perimetroCuadrado(ladosCuadrado){ 
                return ladosCuadrado * 4 ;
                }
                console.log("El perimetro del cuadrado es: " + perimetroCuadrado(ladosCuadrado) + " cm");
                
                function areaCuadrado(ladosCuadrado){
                    return ladosCuadrado * ladosCuadrado;
                }
                console.log("El area del cuadrado es : " + areaCuadrado(ladosCuadrado) + "cm^2");
                
                console.groupEnd(); // finaliza la agrupacion
                 calculoFigura = prompt("Ingrese una figura si desea calcular o 0 para finalizar");
                    break;
            case "triangulo":

                var ladoTriangulo1 = prompt("Ingrese lado del triangulo 1 y 2 ") ;
                var ladoBase= prompt("Ingrese la base del traingulo");
                var alturaTriangulo = prompt("Ingrese la altura del triangulo");
                console.group("triangulo");

                console.log("Los lados del triangulo miden: "
                + ladoTriangulo1 + " cm, " 
                + ladoTriangulo1 + " cm, "
                + ladoBase + " cm");
                console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

                function perimetroTriangulo(ladoTriangulo1){return (ladoTriangulo1 * 2) + ladoBase;}
                console.log("El perimetro del triangulo es: " + perimetroTriangulo(ladoTriangulo1) + " cm");

                function areaTriangulo(ladoTriangulo1){return (ladoBase * alturaTriangulo) / 2;}
                console.log("El area del triangulo es : " +  areaTriangulo(ladoTriangulo1) + "cm^2");
                calculoFigura = prompt("Ingrese una figura si desea calcular o 0 para finalizar");    
                console.groupEnd();
                break;
            case "circulo":
                
                // Codigo del circulo
                console.group("Circulos");
                //radio
                var  radioCirculo = prompt("Ingrese radio del circulo");
                //diametro
                var diametroCirculo = radioCirculo *2;
                //pi
                const PI = Math.PI;
                console.log("Las medidas del circulo son : " 
                + radioCirculo + " cm, " 
                + diametroCirculo + " cm, "
                + PI + " cm");

                //circunferencia

                function perimetroCirculo(diametroCirculo){ 
                    return diametroCirculo * PI;
                }
                console.log("El perimetro del circulo es : " + perimetroCirculo(diametroCirculo) + " cm");
                //area
                function areaCirculo(radioCirculo){return PI * (radioCirculo^2);}

                console.log("El area del circulo es : " + areaCirculo(radioCirculo) + " cm ^2");

                console.groupEnd();
                



                calculoFigura = prompt("Ingrese una figura si desea calcular o 0 para finalizar");    
                console.groupEnd();
                break;
            default:
                alert("No ingreso figura a calcular");
                calculoFigura = prompt("Ingrese una figura si desea calcular o 0 para finalizar");
            break;
        }
/*


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

console.groupEnd();*/

}