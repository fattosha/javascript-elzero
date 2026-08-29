function specialMix(...data) {
  let sum = 0;

  for (let I = 0; I < data.length; I++) {
    let value = parseInt(data[I]);

    if (!Number.isNaN(value)) {
      sum += value;
    }
  }

  return sum || "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
