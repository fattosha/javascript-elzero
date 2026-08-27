// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Output

// Normal Concatenate => 1020
console.log("" + numberOne + numberTwo);

// Normal Concatenate => String
console.log(typeof("" + numberOne + numberTwo));

// Template Literals Way => 1020
console.log(` ${numberOne }${numberTwo }`);

// Template Literals Way => String
console.log(typeof ` ${numberOne }${numberTwo }`);




// Normal Concatenate
console.log(numberOne + "\n" + numberTwo);

/*
  Normal Concatenate
  20
  10
*/

// Template Literals Way
console.log(`${numberOne }
${numberTwo }`);