let H ;
var N=4;
var LONG1 = 120;
var LONG2 =  20;
var LONG3 = 100;
var LONG4 = 130;
function calcularArmonica(){
    H = N / (1/LONG1 + 1/LONG2 + 1/LONG3 + 1/LONG4);
    return H;


}
console.log(calcularArmonica());