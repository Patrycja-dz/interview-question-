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
  let result = 0;
  let prevVal = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currChar = roman[i];
    const currVal = chart[currChar];

    if (currVal < prevVal) {
      result -= currVal;
    } else {
      result += currVal;
    }
    prevVal = currVal;
  }
  return result;
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
