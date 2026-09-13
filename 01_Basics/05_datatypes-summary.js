// primitive data types
// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail; // undefined

const id=Symbol("123");
const anotherId=Symbol("123");

console.log(id === anotherId); // false because symbol is unique

const bigNumber = 1234567890123456789012345678901234567890n;


// non-primitive data types/reference data types
// 1. Object
// 2. Array
// 3. Function

const heros = ["shaktiman", "naagraj", "doga"];//arrays
let myObj = {  
 name: "shaktiman",//objects
 age: 30,   
}

const myFunction = function() { //function
    console.log("hello world");
}

console.log(typeof bigNumber);// "bigint"
console.log(typeof heros);// "object"
console.log(typeof myObj);// "object"
console.log(typeof myFunction);// "function"
console.log(typeof null);// "object" // this is a bug in js, null is not an object but typeof null returns object
console.log(typeof undefined);// "undefined"
console.log(typeof isLoggedIn);// "boolean"
console.log(typeof score);// "number"
console.log(typeof scoreValue);// "number"
console.log(typeof userEmail);// "undefined"
console.log(typeof id);// "symbol"
console.log(typeof anotherId);// "symbol"
console.log(typeof outsideTemp);// "object" // this is a bug in js, null is not an object but typeof null returns object
console.log(typeof "hello world");// "string"
console.log(typeof 100);// "number"
console.log(typeof 100.5);// "number"
console.log(typeof true);// "boolean"
console.log(typeof false);// "boolean"
console.log(typeof null);// "object" // this is a bug in js, null is not an object but typeof null returns object
