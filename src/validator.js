
const validator = {
  isValid:(cardnumber) => {
  
    //convertir input, se dividen los numeros ingresados en numeros individuales y se convierte en un Array y se cambia a tipo number
  
    let ingresar= cardnumber.split("").map(Number);

    //se invierte el orden del array
    ingresar = ingresar.reverse();
  
    let total = 0;
  
    //multiplicar x2 cada numero en posicion par
    for(let i=0; i< ingresar.length; i++) {
      if (i % 2 !==0) {
        ingresar [i] = ingresar [i] *2;
  
        //resultado, se busca numeros mayores a 9 y se resta 9
  
        if (ingresar [i] >=10) {
          ingresar [i] -= 9;
        
        }
  
      }
  
      //sumar los digitos del array y obtener el total
  
      total += ingresar[i];
  
    }
    
    return total % 10 ===0;
  },
  
  //ocultar
  maskify: (cardnumber) => {
    let mask ="";
  
    for (let i = 0; i < cardnumber.length; i++) {
      
      if (i <= cardnumber.length - 5) {
        mask += "#";
      }
       else {
         mask += cardnumber [i];
  
       }
      }
      return mask;
  
  }
  
  }
  
  export default validator;