//using => of this sign treats as a function
let going=()=>{    console.log(`Hey am Here`);
}
going()
console.log(going());
//Taking a parameter
let printing=(val)=>{
    console.log(`Hey ${val}`);
}
printing(`Avinandan`)
//One statement trick
let trying=(n1,n2)=>n1+n2;
let res=trying(2,3)
console.log(res);