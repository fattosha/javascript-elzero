let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
while (index < friends.length) {
  if (typeof friends[index] === "number") {
    index++;
    continue;
  }

  if (friends[index][0].toUpperCase() === "A") {
    index++;
    continue;
  }

  counter++;
  console.log(`${counter} => ${friends[index]}`);
  index++;
}
