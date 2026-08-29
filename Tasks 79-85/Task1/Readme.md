JavaScript Task — Object

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=750&lines=JavaScript+Task;Objects;Object+Methods;This+Keyword" />
</p><p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Objects-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>Task

Create an object called "member" containing:

- "name"
- "age"
- "country"
- "fullDetails()" method

The method uses "this" to access the object's properties and display the complete member information.

Solution

let member = {
  name: "Elzero",
  age: "38",
  country: "Egypt",

  fullDetails: function () {
    console.log(
      `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    );
  }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

Output

Elzero
38
Egypt
My Name Is Elzero, My Age Is 38, I Live in Egypt

Concepts Practiced

Objects
Object Properties
Object Methods
this Keyword
Template Literals
Property Access
Function Expressions

Structure

<pre>
Object/
│
└── Task
</pre><p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=3000&pause=800&color=58A6FF&center=true&vCenter=true&width=500&lines=Learn+JavaScript;Practice+Objects;Keep+Coding" />
</p>
