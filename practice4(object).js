let Mysym= Symbol("Hero1");
const obj1={
    name : "Avinandan Mondal",
    age  : 23,
    place: "Sarapally",
    "State":"West Bengal",
    [Mysym]:"Hero2",
    arr1: ["Kolkata","Odisha"]
}
console.log(obj1);
console.log(obj1.age + " "+ typeof(obj1.age));
console.log(obj1["State"]);
console.log(obj1[Mysym] + " "+typeof(obj1[Mysym]));