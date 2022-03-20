const lista = [ 100, 200,500,400000000,];


const mitadLista = parseInt(lista.length / 2);



function calcularMediaAritmetica(lista){

   const sumaLista= lista.reduce(
 
       function(valorAcumulado = 0, nuevoElemento )
       {
           return valorAcumulado + nuevoElemento;
       }
   );
   
   const resultad = function calculo(){
      
       promedioLista = sumaLista/ lista.length ;
       return promedioLista;
       
       
   }
      return resultad();
   }

function esPar(numerito)
{
    if(numerito % 2===0){
            return true;
    }
    else{
            return false;
    }
}

let mediana;
if(esPar(lista.length) ){
    const elemento1= lista[mitadLista -1 ];
    const elemento2= lista[mitadLista];
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,elemento2,
    ]);
   
    mediana = promedioElemento1y2;
    console.log(mediana);
}
else{
    mediana = lista[mitadLista];
    console.log(mediana);
}
// lista.sort()
// console.log(lista);
// for(let i= 0;i < lista.length; i++){
    
   
//     // console.log(lista[i].charCodeAt());


// }