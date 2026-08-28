let start = 0;
let swappedName = "elZerO";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedName =
      swappedName.slice(0, i) +
      swappedName[i].toLowerCase() +
      swappedName.slice(i + 1);
  } else {
    swappedName =
      swappedName.slice(0, i) +
      swappedName[i].toUpperCase() +
      swappedName.slice(i + 1);
  }
}

console.log(swappedName);
