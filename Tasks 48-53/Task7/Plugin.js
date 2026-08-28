mix.shift();

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] !== "number") {
    continue;
  }

  console.log(mix[i]);
}
