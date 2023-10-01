let bike={
    model:`Yamaha R15s`,
    name:`Yamaha`,
    model1:`Another Yamaha`,
    //Here = is not used because it is also a object instance so : is used
    features:
    {
        brake:`Abs`,
        clutch:`Slipper clutch`,
        tyre:`Wide 140`
    }
}
console.log(typeof(bike));
console.log(bike.model);
console.log(bike.features);
//console.log(features);
//? for to check the object instance is there in the object variable
console.log(bike.features?.tyre,bike.features1?.brake);
for (let key in bike)//for in concept
{   
    //bike[key] printing values as key : value pair
    console.log(key ,bike[key]);
}
for(let key in bike.features)
{
    //printing features[key] as a values 
    console.log(key,bike.features[key]);
}