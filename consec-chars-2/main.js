var findMaxConsecutiveOnes = function (s) {
  let i = 0
  let counter = 1;
  let secondCounter = 0
  while (i < s.length) {

    if (s[i] === s[i + 1]) {
      counter++;
    }

    if (s[i] !== s[i + 1]) {
      if (!secondCounter) {
        secondCounter = counter;

      }

      counter = 1;
    }

    if (counter > secondCounter) {
      secondCounter = counter
    }
    i++
  }
  return secondCounter
}
