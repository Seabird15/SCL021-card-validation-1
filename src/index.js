import validator from './validator.js';

const subCardnumber= document.getElementById("submit");

subCardnumber.addEventListener("click", () => {
  const cardnumber= document.getElementById("cardnumber").value;

  let nombre = document.getElementById("nombre").value;
  let maskNumero = validator.maskify(cardnumber);
  


  if (cardnumber.length <= 12) {
    alert(nombre + ": Ingresa un número con al menos 13 dígitos");
  } else {
    if (validator.isValid(cardnumber)) {
      alert(nombre + ": Tu tarjeta de credito N° " + maskNumero + " es válida. Su pago ha sido realizado con exito!");
    } else {
      alert("¡Oups! Parece que tu tarjeta N° " + maskNumero + " no es valida, verifica la información ingresada. No se ha podido procesar el pago");
   }

  }

  

});
