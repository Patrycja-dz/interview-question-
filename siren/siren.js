// You’re given an array of siren objects, each with a start and end time in seconds,
// representing when the siren is active.
// Write a function to return the minimum number of sirens you need to remove so that no two sirens overlap.

// You’re given an array of siren objects, each with a start and end time in seconds, representing when the siren is active. Write a function to return the minimum number of sirens you need to remove so that no two sirens overlap.

const removeSirens = (sirens) => {
  const sorted = [...sirens].sort((a, b) => a.end - b.end);

  let lastEnd = -Infinity;
  let sirensCounter = 0;
  for (const siren of sorted) {
    if (siren.start >= lastEnd) {
      lastEnd = siren.end;
    } else {
      sirensCounter++;
    }
  }

  return sirensCounter;
};

// === TESTS ===

console.assert(removeSirens([]) === 0, "❌ Test 1: Empty array");
console.assert(
  removeSirens([
    { start: 0, end: 2 },
    { start: 2, end: 4 },
    { start: 4, end: 6 },
  ]) === 0,
  "❌ Test 2: No overlap"
);

console.assert(
  removeSirens([
    { start: 1, end: 10 },
    { start: 2, end: 9 },
    { start: 3, end: 8 },
    { start: 4, end: 7 },
  ]) === 3,
  "❌ Test 3: Each of them overlaps with the others"
);

console.assert(
  removeSirens([
    { start: 0, end: 3 },
    { start: 2, end: 5 },
    { start: 5, end: 7 },
    { start: 6, end: 8 },
    { start: 8, end: 10 },
  ]) === 2,
  "❌ Test 4: Partialy collide"
);

console.assert(
  removeSirens([
    { start: 1, end: 5 },
    { start: 1, end: 5 },
    { start: 1, end: 5 },
  ]) === 2,
  "❌ Test 5: The same range"
);

console.assert(
  removeSirens([
    { start: 1, end: 10 },
    { start: 1, end: 5 },
    { start: 1, end: 3 },
  ]) === 2,
  "❌ Test 6: The same start"
);

console.assert(
  removeSirens([
    { start: 0, end: 10 },
    { start: 2, end: 10 },
    { start: 4, end: 10 },
  ]) === 2,
  "❌ Test 7: The same end"
);

console.assert(
  removeSirens([
    { start: 1, end: 5 },
    { start: 3, end: 7 },
    { start: 6, end: 9 },
    { start: 8, end: 10 },
    { start: 11, end: 15 },
    { start: 18, end: 20 },
  ]) === 2,
  "❌ Test 8: Complex case"
);

console.log("✅ All of tests passed!");
