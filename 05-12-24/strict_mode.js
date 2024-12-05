// introduced in ES5. help developer to write clean,more secure and error less code.

"use strict"
let x=10; // if we not decelare x as let var const, it will show an error
console.log(x);

// strict mode for functions
function sum(){
    "use strict"
    let x=10,y=20;
    console.log(x+y);   
}
sum();

// without strict mode
x=10;
console.log(x); // no error

// with strict mode
"use strict"
x=10;
console.log(x); // error: x is not defined


// Eliminates 'this' binding for global
// without strict mode 
console.log(this); // o/p=window

// with strict mode
"use strict"
function fun(){
    console.log(this);
}
fun() // o/p undefined