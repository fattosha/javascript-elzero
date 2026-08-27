Task 1 — JavaScript Execution Order

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&center=true&vCenter=true&width=600&lines=JavaScript+Execution+Order;DOM+Manipulation;Script+Loading" alt="Typing Animation">
</p><p align="center">
  A JavaScript task demonstrating how the position and execution<br>
  timing of scripts affect DOM element access.
</p><hr>Code Comparison

Code One

Does not work because the script runs before the "<h1>" element is created, so "getElementById()" returns "null".

Code Two

Works because "window.onload" waits until the page has completely loaded before accessing the element.

Code Three

Works because the "<h1>" element already exists when the script runs.

<hr>Concepts

"getElementById()" • "window.onload" • DOM • Script Execution Order • JavaScript

<hr><p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=2" width="80%">
</p><p align="center">
  <i>JavaScript → DOM → Execution Order → Element Access</i>
</p>
