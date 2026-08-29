JavaScript Task — Arrow Functions

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=2500&pause=700&center=true&vCenter=true&width=700&lines=Arrow+Functions;Implicit+Return;Function+Expressions" />
</p>Task

Convert the normal functions into Arrow Functions while keeping the same output.

Arrow Function

بدل:

function itsMe() {
  return `Iam A Normal Function`;
}

استخدمنا:

let itsMe = () => `Iam A Normal Function`;

Important — Return

في الـ Arrow Function عندنا طريقتين:

Implicit Return

let itsMe = () => `Iam A Normal Function`;

لما مفيش "{}"، الـ expression بيرجع تلقائيًا، لذلك مش بنكتب "return".

Explicit Return

let itsMe = () => {
  return `Iam A Normal Function`;
};

هنا استخدمنا "{}"، لذلك لازم نكتب "return".

URL Function

let urlCreate = (protocol, web, tld) =>
  `${protocol}://www.${web}.${tld}`;

Key Point

() => value              → Implicit Return
() => { return value; }  → Explicit Return

Output

Iam A Normal Function
https://www.elzero.org

Concepts

- Arrow Functions
- Function Expressions
- Implicit Return
- Explicit Return
- Template Literals
- Function Parameters
