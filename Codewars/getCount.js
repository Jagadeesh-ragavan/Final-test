function getCount(words) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let consonantCount = 0;

  if (typeof words !== "string") return { vowels: 0, consonants: 0 };

  let newString = words.trim().toLowerCase();

  if (!isNaN(newString) || !newString) return { vowels: 0, consonants: 0 };

  for (let char of newString) {
    if (vowels.includes(char)) {
      vowelsCount++;
    } else if (/[a-z]/.test(char)) {
      consonantCount++;
    }
  }
  console.log("vowelsCount", vowelsCount, "consonantCount", consonantCount);
  return { vowels: vowelsCount, consonants: consonantCount };
}

getCount("Test word for counting 12345")