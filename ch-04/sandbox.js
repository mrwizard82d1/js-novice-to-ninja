// Function expressions
const speak = function() {
    console.log("Woof!");
}

// Calling (declared) functions
greet();
greet();
greet();

// Calling function expressions. (Yes. No difference.)
// speak();
// speak();
// speak();

// Function declarataions
// An example of function hoisting. Even though we define `greet` **after** we use it, the interpreter 
// effectively moves the declaration to the "top" of the file so that it is actually defined before 
// any code is executed.
function greet() {
    console.log("hello there");
}
