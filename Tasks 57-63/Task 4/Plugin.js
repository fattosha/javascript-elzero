function checkStatus(a, b, c) {
  let Array = [a, b, c];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {

        typeof Array[i] === "string" ?
        typeof Array[j] === "number" ?
        typeof Array[k] === "boolean" ?
        console.log(
          `Hello ${Array[i]}, Your Age Is ${Array[j]}, ${
            Array[k]
              ? "You Are Available For Hire"
              : "You Are Not Available For Hire"
          }`
        ) : null : null : null;

      }
    }
  }
}
