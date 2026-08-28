JavaScript Task — Array Methods

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=700&lines=JavaScript+Task;Array+Methods;Pop+%7C+Length+%7C+Splice+%7C+Slice;Keep+Coding" />
</p>Task — Array Manipulation

This task demonstrates four different ways to get the first 3 elements from an array:

- "pop()"
- "length"
- "splice()"
- "slice()"

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

Output

["Ahmed", "Elham", "Osama"]

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=58A6FF&height=100&section=footer" />
</p>
