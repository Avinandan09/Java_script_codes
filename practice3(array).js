const westBengal=["kolkata","Nadia", "Mednipur","Kharagpur"]
const Mumbai=["Nasik","Navi Mumbai","Zuhu","Dadar"]
// westBengal.push(Mumbai)//This Method will push a array object into a array like [... [... ]] This way
// console.log(westBengal);
const newLoc=westBengal.concat(Mumbai);//This method concating the two values of the arry into a single array 
                                        //and always return a merged array and that should be store in the array
console.log(newLoc);
//console.log(newLoc.shift());
newLoc.shift()//This will print a value o the left side hand will shifted
console.log(newLoc);
