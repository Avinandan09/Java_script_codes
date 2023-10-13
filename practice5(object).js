let obj1={
    1:'a',
    2:'b',
    3:'c'
}
let obj2={
    4:'d',
    5:'e',
    6:'f'
}
let obj3={
    7:'g',
    8:'i',
    9:'j'
}
console.log(obj1);
// console.log(obj1+" "+obj2+" "+obj3);
console.log({obj1,obj2,obj3});//Here Concating the object with the value and key parameter itself
let obj4=Object.assign({},obj1,obj2,obj3);//Here concating the objects like spread and combinning the objects key values
console.log(obj4);
//Interview Important:
// console.log(obj1.keys);//This will not print any keys It is not the correct way to print
console.log(Object.keys(obj1));//This will print keys of any object
                              //And it will Give Array [] by connverting obejct {}.***Important***
        
console.log(Object.values(obj2));

