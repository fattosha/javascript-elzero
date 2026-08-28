function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Age in Years Is ${theAge}`);
    console.log(`Age in Months Is ${theAge * 12}`);
    console.log(`Age in Weeks Is ${theAge * 12 * 4}`);
    console.log(`Age in Days Is ${theAge * 12 * 4 * 7}`);
    console.log(`Age in Hours Is ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Age in Minutes Is ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Age in Seconds Is ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Age in Months Is 456
