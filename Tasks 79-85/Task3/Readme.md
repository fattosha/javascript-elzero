JavaScript Task — Object.assign

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=750&lines=JavaScript+Task;Object.assign();Object+Merging;Shorthand+Properties" />
</p><p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Objects-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>Task

Create a final object by merging multiple objects and a variable into one object using "Object.assign()".

The final object should contain all properties from:

- Variable "a"
- Object "threeNums"
- Object "twoNums"

Solution

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

Output

{
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
}

Concepts Practiced

Object.assign()
Object Merging
Object Properties
Shorthand Properties
Object Literals
Variables

Structure

<pre>
Object-Assign/
│
└── Task
</pre><p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=3000&pause=800&color=58A6FF&center=true&vCenter=true&width=500&lines=Merge+Objects;Practice+Object.assign();Keep+Coding" />
</p>
