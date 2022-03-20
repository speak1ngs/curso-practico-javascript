const lista=[1,2,3,1,2,3,4,2,2,2,1,];

const cantLista = {};

lista.map(
    function(elemento){
           
        if(cantLista[elemento]){
   
            cantLista[elemento]+= 1;

        }
        else{

            cantLista[elemento] = 1;
        }    
    }
    
);

//object.entries permite convertir objetos en arrays
const listaArry = Object.entries(cantLista).sort(
    function (valorAcumulado,nuevoValor){
        //compara el valor  y retorna un valor positivo o negativo dependiendo
        //si es mayor o menor obs ver documentacion
        //el array tiene dos elementos 0 es el valor y 1 es la cantidad 
        //de veces que se repitio se debe ordenar por la cantidad
        //de veces que se repitio
       return valorAcumulado[1]-nuevoValor[1];
    }
);
//lista array es la lista ordenada al final se encuentra el valor  mas alto

const moda = listaArry[listaArry.length-1];
console.log(moda[0]);