// var a =10;
// console.log(a);
// function demo(){
//     let b =20;
//     console.log(b);
// }
// demo()

// let user = {
//     fullName:"Anshuman",
//     address:"Sohna",
//     mobileno:68324571369,
//     favcolor:["red" , "yellow" , "blue"]
// }
// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(user.favcolor[1,'yellow'])
// console.log(Object.entries(user))
// this enteries create the keys of object into array//


const car = {
    make: "Maruti",
    model: " Breeza(modified)"
};
// Object.freeze(car);// neither add or change value in the existing object// 
Object.seal(car); // we cannot add a new value but we can change the existing value//

car.make = "Mahindra";
car.color = "Blue";
car.model = "scorpio";

console.log(car)
