function getLeylandNumbers(num, maxValue) {
  const leylands = [];
  for (let x = 2; x < maxValue; x++) {
    for (let y = 2; y < maxValue; y++) {
      const value = x ** y + y ** x;

      if (!leylands.some((obj) => obj.value === value))
        leylands.push({ value, x, y });

      if (leylands.length >= num) {
        return leylands.sort((a, b) => a.value - b.value);
      }
    }
  }
  return leylands.sort((a, b) => a.value - b.value);
}

getLeylandNumbers(1, 20);
getLeylandNumbers(5, 5);
