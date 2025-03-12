const permutations = (str) => {
  if (str.length === 1) return [str];

  const result = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    const perms = permutations(remaining);

    for (const perm of perms) {
      result.add(char + perm);
    }
  }
  return Array.from(result);
};

const str = "abc";
const result = permutations(str);

console.log("result", result);
