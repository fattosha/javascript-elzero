function createSelectBox(startYear, endYear) {
  let number = (endYear - startYear) + 1;

  document.write("<select>");

  for (let i = startYear; i < endYear + 1; i++) {
    document.write("<option value=" + i + ">");
    document.write(i);
    document.write("</option>");
  }

  document.write("</select>");
}

createSelectBox(2000, 2021);
