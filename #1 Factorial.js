
let x = 4;
const factorial = n=>{
    if(n==0||n==1){
        return 1;
    }
    else
    return n*factorial(n-1);
}
console.log(factorial(x));
