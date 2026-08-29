JavaScript Task — Nested Functions

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=2500&pause=700&center=true&vCenter=true&width=650&lines=Get+Details;Nested+Functions;String+Methods" />
</p>Task

Create "getDetails()" using nested functions to format:

- Name
- Age
- Country

Important

استخدمنا "split()" بدل "join()" لأن الـ parameters هنا Strings وليست Arrays.

zName.split(" ")
zAge.split(" ")

"split()" بتحول الـ String إلى Array.

أما "join()" فبتستخدم مع الـ Array لتحويل عناصرها إلى String.

String → split() → Array
Array  → join()  → String

Nested Functions

getDetails()
├── namePattern()
├── ageWithMessage()
├── countryTwoLetters()
└── fullDetails()

الـ inner functions موجودة داخل "getDetails()"، لذلك يمكن لـ "getDetails()" استخدامها، لكن لا يمكن استدعاؤها مباشرة من خارجها.

Output

Hello Osama M., Your Age Is 38, You Live In EG
Hello Ahmed A., Your Age Is 32, You Live In SY

Concepts

- Nested Functions
- Function Scope
- "split()"
- "join()"
- String Methods
- "toUpperCase()"
- Template Literals
