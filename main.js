// function add(a,b){
//     return a+b
// }
// let ans= add(3,5);
// console.log(ans)

function callBack(){
    console.log("ram h ")
}
let ans = function(a,b,callBack){
   let ans=  a+b;
    
    
console.log(ans)
callBack();
}

console.log(ans(9,8,callBack))