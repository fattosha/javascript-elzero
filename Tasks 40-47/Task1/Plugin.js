let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1 - pop
let friends1 = [...myFriends];
friends1.pop();
console.log(friends1);

// Method 2 - length
let friends2 = [...myFriends];
friends2.length = num;
console.log(friends2);

// Method 3 - splice
let friends3 = [...myFriends];
friends3.splice(num);
console.log(friends3);

// Method 4 - slice
console.log(myFriends.slice(0, num));
