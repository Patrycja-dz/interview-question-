function getLeylandNumbers(num, maxValue) {
  const leylandSet = new Set();
  const leylands = [];
  for (let x = 2; x < maxValue; x++) {
    for (let y = 2; y < maxValue; y++) {
      const result = x ** y + y ** x;
      if (!leylandSet.has(result)) {
        leylandSet.add(result);
        leylands.push({ result, x, y });
      }

      if (leylandSet.size >= num) {
        return leylands.sort((a, b) => a.result - b.result);
      }
    }
  }
}

console.log(getLeylandNumbers(1, 20));
console.log(getLeylandNumbers(5, 5));
console.log(getLeylandNumbers(5, 2));
