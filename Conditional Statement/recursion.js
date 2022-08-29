let fact =1;
function recursionFun(x){
    if(x==1){
        return 1;
    }
    return fact =recursionFun(x-1)*x;
}
console.log(recursionFun(6));