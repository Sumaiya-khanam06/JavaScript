// Stack(primitive), Heap(refernce/non-primitive)

let myName = "sumaiya"

let anotherName = myName
anotherName = "sumi"

console.log(myName);
console.log(anotherName); // {myName: "sumaiya", anotherName: "sumi"}

let userOne = {
    email:"summi@gmail.com",
    upi : "123@upi"
}

let userTwo = userOne
userTwo.email = "newemail@gmail.com"

console.log(userOne.email); //
console.log(userTwo.email); // 
