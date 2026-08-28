let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
  if (friends[i][0].toLowerCase() === letter) {
    friends.splice(i, 1);
    i--;
  }
}

for (let i = 0; i < friends.length; i++) {
  console.log(`${i + 1} => ${friends[i]}`);
}
