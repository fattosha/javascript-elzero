JavaScript Task 54

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=650&lines=Task+54;While+Loop;Continue+Statement;Array+Filtering" />
</p>Task

Loop through the "friends" array and:

- Skip numbers.
- Skip names that start with "A".
- Print the remaining names with a counter starting from "1".

Solution

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

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

Output

1 => Sayed
2 => Mahmoud

Concepts Used

- "while" loop
- "typeof"
- "continue"
- Array indexing
- String methods
- "toUpperCase()"
- Template literals
