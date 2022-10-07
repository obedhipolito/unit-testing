export function circle(x: number) {
    let resultado = 0;
  
    if (x == 0) {
      resultado = 0;
    }
  
    if (x < 0) {
      resultado = 0;
    }
  
    if ( x > 0 ) {
      resultado = (x * x) * 3.1416;
    }
  
    return resultado;
  };