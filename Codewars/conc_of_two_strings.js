const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2;
const mergedArr = [];

const longestConsec = () => {
  if (k <= 0 || k > strarr.length || strarr.length === 0) return "";
  strarr.forEach((str, i) => {
    if (i + k <= strarr.length) {
      let mergedStr = strarr.slice(i, i + k).join("");
      console.log(mergedStr);
      mergedArr.push(mergedStr);
    }
  });
  console.log("mergedArr", mergedArr);
  let longestStr = "";
  for (let i = 0; i < mergedArr.length; i++) {
    if (mergedArr[i].length > longestStr.length) {
      longestStr = mergedArr[i];
    }
  }
  console.log("Longest concatenated string:", longestStr);
};

longestConsec();