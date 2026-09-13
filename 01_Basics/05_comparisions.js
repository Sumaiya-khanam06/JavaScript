// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0);//false
console.log(null >= 0);//true //because null is converted to 0 when using >= operator
console.log(null == 0);//false

console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined == 0);//false 

// === 

console.log("2"=== 2); // false because === checks for both value and type, and here one is string and the other is number

// we should avoid using these comparisions
