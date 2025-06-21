// Given an array of strings representing the names of monarchs and their ordinal numbers, write a function that returns the list of names sorted first by name and then by their ordinal value (in Roman numerals), in ascending order.

// Example:

// > sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"])
// > ["Louis VIII", "Louis IX", "Philip I", "Philip II"]

// > sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"])
// > ["Edward VIII", "Elizabeth II", "George V", "George VI"]

const chart = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const romanToArabic = (roman) => {
  return roman.split("").reduce(
    ([result, prev], curr) => {
      const currVal = chart[curr];
      const negated = prev < currVal ? 2 * prev : 0;

      return [result + currVal - negated, currVal];
    },
    [0, 0]
  )[0];
};

const sortMonarchs = (arr) => {
  let monarchs = arr.map((monarch, index) => {
    let parts = monarch.trim().split(" ");

    return {
      original: monarch,
      name: parts.slice(0, -1).join(" "),
      title: parts[parts.length - 1],
      number: romanToArabic(parts[parts.length - 1]),
    };
  });

  monarchs.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return a.number - b.number;
  });

  return monarchs.map((m) => m.original);
};

sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"]);
sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"]);

console.log(sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"]));

console.log(
  sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"])
);
