// Implicit Conversion
// String to number

let res="5"*2;
console.log(res,typeof res);

// Number to string

let res1=5+"2";
console.log(res1,typeof res1); // o/p=52 string

// Explicit Conversion
// Number to string

let num=42;
let str=String(num);
console.log(str,typeof str); // o/p="42" string

// another way of conversion
let num1=42;
let str1=num1+"";
console.log(str1,typeof str1);

// String to number
let str2="42";
let num2=Number(str2);
console.log(num2,typeof num2); // o/p=42 number

let str3="42.5";
let intnum=parseInt(str3);  // o/p=42
let floatnum=parseFloat(str3); // o/p=42.5


// Boolean Conversion
let val1=Boolean(0); // o/p=false
let val2=Boolean(1); // o/p=true

console.log(val1,val2);
