/*const precioOriginal =120;
const descuento = 18;*/
const coupons = [
   { name:"JuanDC_es_Batman", discount: 15},
{name: "pero_no_le_digas_a_nadie", discount: 30},
{name: "es_un_secreto", discount:25 },];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precionConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precionConDescuento;
}


function onClickButtonPriceDiscount(){

    const precio = document.getElementById("inputPrice");
    const priceValue = precio.value;

    const cupons = document.getElementById("inputCoupons");
   
    const couponValue = cupons.value;

  const isCouponValueValid = function (coupon){
      return coupon.name===couponValue;
  }  
  const userCoupon = coupons.find(isCouponValueValid);

 if(!userCoupon){
    alert("El cupon "+ couponValue + " no es valido");
 } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

    // calcularPrecioConDescuento(priceValue, discountValue);
    // alert(calcularPrecioConDescuento(priceValue, discountValue))
 


  
}



// console.log({precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precionConDescuento,
// })
