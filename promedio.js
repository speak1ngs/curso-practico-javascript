


function calcularMediaAritmetica(lista){
 //   let sumaLista = 0;
// for(let i =0 ; i < lista.length; i++){
//     sumaLista +=lista[i] ;
// }
//reduce permite recorrer par ahacer operaciones
const sumaLista= lista.reduce(
    //function anonima
    function(valorAcumulado = 0, nuevoElemento )
    {
        return valorAcumulado + nuevoElemento;
    }
);

const resultad = function calculo(){
   
    promedioLista = sumaLista/ lista.length ;
    return promedioLista;
    
    
}
    console.log(resultad());
}
