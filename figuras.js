// Codigo del cuadrado

//console.group agrupo mensajes
// console.group("Cuadrados")
/*
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
        }*/
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

console.groupEnd();

}*/

// Aqui interanctuamos con el HTML
  
// cuadrado
/*function perimetroCuadrado(ladosCuadrado){ 
    return ladosCuadrado * 4 ;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro)
}

function areaCuadrado(ladosCuadrado){
    return ladosCuadrado * ladosCuadrado;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert(perimetro)
}

//triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const value = input1.value;
    const input2 = document.getElementById("InputTrianguloBase");
    const base = input2.value;

    const perimetro = perimetroTriangulo(value,base);

    alert(perimetro)
}


function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const lado = input1.value;
    const input2 = document.getElementById("InputTrianguloBase");
    const base = input2.value;

    const input3 = document.getElementById("InputTrianguloAltura");
    const altura = input3.value;

    const perimetro = areaTriangulo(lado,base,altura);

    alert(perimetro)
}

function perimetroTriangulo(ladoTriangulo1,ladoBase){
    var mult = ladoTriangulo1 * ladoTriangulo1;
    return  Number(mult) + Number(ladoBase);
}


function areaTriangulo(ladoTriangulo1, ladoBase, alturaTriangulo){return (ladoBase * alturaTriangulo) / 2;}*/
/*
function verificacionIsoceles(ladoA,ladoB,base){
    if(ladoA===ladoB &&  ladoA!=base){
        console.log("corresponde un triangulo isoceles");
        
        calcularAltura =Math.sqrt( Math.pow(ladoA,2)-(Math.pow(base,2)/4));

        console.log("La altura de es: " + calcularAltura);
    }
    else{
        console.log("No corresponde a un Triangulo Isoceles");
    }
}

verificacionIsoceles(4,5,6);*/