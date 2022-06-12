function ppp(a,b){
  return function(c,d){
    return function (e,f){
      return a*c*e+b*d*f
    }
  }
}
console.log( ppp(1,2)(3,4)(5,6));