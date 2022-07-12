
const validator = {
  isValid:(cardnumber) => {
  
    //convertir input
  
    let ingresar= cardnumber.split("").map(Number);
    ingresar = ingresar.reverse();
  
    let total = 0;
  
    //multiplicar
    for(let i=0; i< ingresar.length; i++) {
      if (i % 2 !==0) {
        ingresar [i] = ingresar [i] *2;
  
        //resultado
  
        if (ingresar [i] >=10) {
          ingresar [i] -= 9;
        
        }
  
      }
  
      //sumar
  
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