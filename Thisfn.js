let mobile={
    model:`nord2`,
    company:`Oneplus`,
    features:()=>{
        console.log(`calling to the help line number`);
        console.log(this.model);
    }
}
console.log(mobile);
console.log(mobile.features());
//constructor function 
function human(age,height,weight){//constructor fun does not use => this arro fuction
    this.age=age;
    this.height=height;
    this.weight=weight;
}
let human1=new human(20,5.8,60)
console.log(human1);
