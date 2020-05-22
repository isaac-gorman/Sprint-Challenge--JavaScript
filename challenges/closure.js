// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
// myFunction();

// Explanation: 
// - The textbook definition of closure is: When a function "remembers" the variables outside of it scope, even if you pass the function elsewhere (outside of its own scope).
// Closure: On line x The myFunction() function has closure over the external varible, and is printered whenever the myFunction() function is invoked outside of its scope. 

// Closure: The nestedFunction() has closure over the internal varibale even though it is outside of its scope. The nestedFunction() prints the internal varibale to the console whenever it is invoked outisde of its own scope, but still within the myFunction() scope. 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(a){
  let total = 0;
  let counter = 0;
  while (counter <= a){
    total +=counter;
    counter+=1;
  }
  console.log(total)
}

// summation(4)