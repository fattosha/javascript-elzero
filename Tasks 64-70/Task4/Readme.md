JavaScript Task — Special Mix

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=750&lines=Special+Mix;Rest+Parameters;parseInt();Number.isNaN();Keep+Coding" />
</p>---

Task

Create a function "specialMix()" that accepts any number of values using Rest Parameters.

The function should:

- Convert the values to numbers using "parseInt()".
- Ignore values that result in "NaN".
- Add all valid numbers together.
- Return ""All Is Strings"" if there are no valid numbers.

---

Solution

function specialMix(...data) {
  let sum = 0;

  for (let I = 0; I < data.length; I++) {
    let value = parseInt(data[I]);

    if (!Number.isNaN(value)) {
      sum += value;
    }
  }

  return sum || "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

---

Concepts Used

Rest Parameters
for Loop
parseInt()
Number.isNaN()
Conditional Statements
Return

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=650&lines=Practice+Makes+Progress;One+Task+At+A+Time;Keep+Coding" />
</p>
