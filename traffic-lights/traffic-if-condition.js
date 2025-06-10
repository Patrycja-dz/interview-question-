function isValidTrafficSequence(arr) {
  if (arr.length <= 1) return true;

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    /*    console.log(current, next) */
    if (
      !(current === "red" && next === "green") &&
      !(current === "green" && next === "yellow") &&
      !(current === "yellow" && next === "red")
    ) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
}

isValidTrafficSequence(["red", "green", "yellow", "red", "green"]);
isValidTrafficSequence(["red", "green", "yellow"]);
isValidTrafficSequence(["red", "yellow", "green"]);
isValidTrafficSequence([]);
