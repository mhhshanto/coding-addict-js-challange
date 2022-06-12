// function ret(a,b){
//   return function(c,d){
//     return function(e,f){
//       return a*c*e+b*d*f
//     }
//   }
// }
// console.log(ret(1,2)(3,4)(5,6));
// console.log(6+7);
ret = (a,b) =>(c,d) =>(e,f) => a*c*e+b*d*f
console.log(ret(1,2)(3,4)(5,6));