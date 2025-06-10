function isValidTrafficSequence(arr) {
  if (arr.length <= 1) return true;

  const valid = [
    ["red", "green"],
    ["green", "yellow"],
    ["yellow", "red"],
  ];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    const isValidPair = valid.some(
      (pair) => pair[0] === current && pair[1] === next
    );

    if (!isValidPair) {
      return false;
    }
  }

  return true;
}

isValidTrafficSequence(["red", "green", "yellow", "red", "green"]);
isValidTrafficSequence(["red", "green", "yellow"]);
isValidTrafficSequence(["red", "yellow", "green"]);
isValidTrafficSequence([]);
