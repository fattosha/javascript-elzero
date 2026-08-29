function multiply(...numbers) {
  let arr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {

      if (!Number.isInteger(numbers[i])) {
        numbers[i] = parseInt(numbers[i]);
      }

      arr.push(numbers[i]);
    }
  }

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
}

console.log(multiply(10, 20));           // 200
console.log(multiply("A", 10, 30));      // 300
console.log(multiply(100.5, 10, "B"));   // 1000
