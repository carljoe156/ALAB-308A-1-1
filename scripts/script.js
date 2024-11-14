//Declare a global counter variable.
//Create a simple function that increments the variable, and then calls itself recursively.
//Surround the initial function call in a try/catch block.
//Within the catch, log the error and the value of the counter variable

//Part 1: Stack Overflow

// let counter = 0;
// function increment() {
//   counter++;
//   increment(counter);
// }
// try {
//   increment();
// } catch (error) {
//   console.log(" Stack Overflow error ");
//   console.log(counter);
// }

let counter = 0;

function incrementAndCall() {
  counter++;
  incrementAndCall();
}

try {
  incrementAndCall();
} catch (error) {
  console.log("Stack overflow error occurred.");
  console.log("Counter value at overflow:", counter);
}

//Or this Both works

let i = 0;

function recursiveFunction() {
  i++;
  recursiveFunction();
}

try {
  recursiveFunction();
} catch {
  console.log("failed");
  console.log(i);
}

console.log(
  "==================================================================================================================="
);

//Disregard this
//Part 2: Trampolines
//Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
//Once your recursive function is complete, trampoline it.

// const factorial = (n) => {
//   if (n === 0) return 1; // The base case, to stop recursion
//   return n * factorial(n - 1); // The recursive call
// };

// function flatten(arr) {
//   let result = [];
// }
