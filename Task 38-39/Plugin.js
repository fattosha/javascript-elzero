JavaScript Task — Switch & String Methods

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=2500&pause=700&color=58A6FF&center=true&vCenter=true&width=700&lines=JavaScript+Task;Switch+Statement;String+Methods;Keep+Coding" />
</p>Task  — 8/28

A JavaScript task using:

- "trim()"
- "toUpperCase()"
- "slice()"
- "switch"
- "case"
- "default"

The task removes extra spaces from the day, capitalizes the first letter, then displays the appropriate appointment time.

let day = "   friday  ";

day = day.trim();
day = day[0].toUpperCase() + day.slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=58A6FF&height=100&section=footer" />
</p>
