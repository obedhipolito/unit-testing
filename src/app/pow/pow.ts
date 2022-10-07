

export function getPow (x: number, n: number) {

    let resultado = x;
  
      if (n==0) {
        resultado = 1 ;
      }
  
      if (n < 0) {
        resultado = 0;
      }
  
      if (n > 0){
        for (let i= 1; i<n; i++) {
        resultado = (resultado) * x;
        }
      }
  
  
    return resultado;
  }