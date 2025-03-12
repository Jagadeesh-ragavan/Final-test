function solution(list) {
  let result = [];
  let start = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 !== list[i + 1]) {
      if (start === list[i]) {
        result.push(`${start}`);
      } else if (start + 1 === list[i]) {
        result.push(`${start},${list[i]}`);
      } else {
        result.push(`${start}-${list[i]}`);
      }
      start = list[i + 1];
    }
  }

  return result.join(",");
}

console.log(solution([1, 2, 3, 5, 7, 8, 9, 10]));
