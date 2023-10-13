//Arrow  Functions 
const val = (n1,n2) => {
    console.log(n1+n2);
    return;
}
val(5,10);
const val2=(n1,n2)=>(n1+n2)
console.log(val2(20,30));
//Interview *** important ***
//normal arrow funtions {} curly braces always return value and with return statement..
//arrow functions that used => () return the value but not using the explicit return() method
const user= ( )=>({userame: "Avinandan"})//***If we want to return any object in the () braces we have also define {} this brackets also */
console.log(user());