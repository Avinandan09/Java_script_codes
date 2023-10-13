//for-of loop
let arr1=[20,30,40,50,60]
console.log(arr1);
for (const key of arr1) {
   console.log(key);
}

//Important map and it is use further in data bases.

let map1=new Map();
map1.set('INR','INDIAN CURRENCY');
map1.set('DOLLAR $','USA CURRENCY')
map1.set('INR','INDIAN CURRENCY');
console.log(map1);
for (const [key,value] of map1) {
    console.log(key);
    console.log(value);
}