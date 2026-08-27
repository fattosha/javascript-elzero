//first way using console
console.log("%cElzero", "color: blue;font-size: 80px; font-weight: bold; text-align: center; font-family: Arial ");
// second way using document.write
document.write("<p style='color: blue;font-size: 80px; font-weight: bold; text-align: center; font-family: Arial ' > Elzero </p>");
//3rd way using document.createElement
let c = document.createElement("p");
c.textContent = "Elzero";
c.style.color = "blue";
c.style.fontFamily = "Arial";
c.style.fontSize = " 80px";
c.style.textAlign = " center";
c.style.fontWeight = " bold";
document.body.append(c);