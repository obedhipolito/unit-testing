export function getFact(n: number) {
    let base = 1;
  
    if ( n == 0) {
      base = 1;
    }
  
    if (n < 0 ){
      base = 0;
    }
  
    if ( n >= 16) {
      base = 0;
    }
  
    if ( n > 0 && n < 16) {
      for (let i=1; i<n; i++) {
        base = base*(i+1);
      }
    }
  
    return base;
  }