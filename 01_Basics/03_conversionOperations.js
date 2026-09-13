let score = null
//let score = "33"
//let score = 33
//let score = true
//let score = undefined

console.log(typeof score);
console.log(typeof(score)); 

let score = "33"
console.log(typeof(score)); // "string"


let valueInNumber = Number(score);
console.log(typeof valueInNumber); // "number" if we the value in number only r to convert the value in number we can use Number() function
console.log(valueInNumber); 

//"33"=> 33
//"33abc" => NaN
//true => 1
//false => 0
//undefined => NaN
//null => 0

let isLoggedIn = ""

let booleanISLoggedIn = Boolean(isLoggedIn);
console.log(booleanISLoggedIn); 

//1 => true
//0 => false
//"" => false
//"sumiaya" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); 
console.log(typeof stringNumber);
