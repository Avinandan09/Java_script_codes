//annonymous function
let val=function(n1,n2){
    return n1+n2;
}
let res=val(5,6)

console.log(val,typeof(val));
console.log(res);
//order to get values
function just(n1,n2,n3=2)//here n3=2 although given value is 5 soo it takes the value as 5
{
    console.log(n1,n2,n3);
    return n1+n2+n3
}

let result=just(3,4,5)
console.log(result);