JavaScript Task

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=2500&pause=700&center=true&vCenter=true&width=600&lines=Arrow+Functions;Keep+Coding" />
</p>Task

Convert the normal functions into Arrow Functions.

let itsMe = () => `Iam A Normal Function`;

let urlCreate = (protocol, web, tld) =>
  `${protocol}://www.${web}.${tld}`;

Note

استخدمنا Implicit Return لأن الـ Arrow Function فيها expression واحد، فمش محتاجين نكتب "return".

() => `Hello`

لكن لو استخدمنا "{}" لازم نكتب "return":

() => {
  return `Hello`;
}

Output

Iam A Normal Function
https://www.elzero.org

Learned

- Arrow Functions
- Function Expressions
- Implicit Return
- Template Literals
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
