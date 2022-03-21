//calculadora de medianas


function calculoMedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const persMedio1 = lista[mitad - 1];
        const persMedio2= lista[mitad];
            const mediana = calcularMediaAritmetica([persMedio1,persMedio2]);
        return mediana;
    }
    else{
        const persMedio = lista[mitad];

        return persMedio;
    }
}


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



//helpers funciones que no parte de la logica de negocios pero se utilizan


function esPar(numerito){
    return  (numerito%2 ==0) ;  
    
}

//mediana general
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
});

const orderSalario  = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
});


const medianaGeneral = calculoMedianaSalarios(orderSalario);
// console.log(calculoMedianaSalarios(orderSalario));

//mediana del top 10 %

const posicionInicialSplice = (orderSalario.length * 90 ) /100 ;
const contadorSplice = orderSalario.length - posicionInicialSplice;
//SPLICE EXTRAE VALORES DESDE DONDE LE SEÑALES Y LA CANTIDAD DE VALORES A EXTRAER 
const salararioDiezPorCiento = orderSalario.splice(posicionInicialSplice,contadorSplice);

const medianaTopDiez = calculoMedianaSalarios(salararioDiezPorCiento);
console.log({
    medianaGeneral,
    medianaTopDiez,

})