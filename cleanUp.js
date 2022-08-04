// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
//I added a semi-colon at the end of the statement and at the end for the call of the function.
//This is so that the code follows the best conventions and practices and that there is more consistency.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//I added an indent to lines 21 and 22. This is so that the code looks more like it's nested within the function
//and visually established the relationship of the variables and the function. I also moved the closing curly
//brace in line 23 so that it looks more in line with current practices.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//I changed the function declaration from `func` to `function` so that the code would run.
//I moved the opening curly brace one space forward so that the declaration looks more distinct from the statement.
//I moved the closing curly brace in line in line 38 so that it looks more in line with current practices.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`)
}

average(2, 4);
//I moved the opening curly brace one line back so that the declaration looks more on line with typical code format.
//I made an indent to line 47 so that the variable declaration looks more nested within the function--which it is,
//I moved a space back in line 48 so that the variable declaration looks more in relation to the previously declared variable.
//I removed a space between the other variables and `console.log()` statement because the extra space was not needed.
//I moved the period in line 49 to go within the backticks rather than outside of then. This is so that the command line
//interpreter does not read the period as a stray part of a function.
//I moved the closing curly brace in line 50 one space back to keep up with best practices.
//I added a function call so that the results of the function will be visible when it runs through a command line interpreter.
