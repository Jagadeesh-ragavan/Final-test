
const ipsBetween = (start, end) => {
  function ipToInt(ip) {
    return ip.split(".").reduce((acc, octet, index) => {
      return acc + parseInt(octet, 10) + Math.pow(256, 3 - index);
    }, 0);
  }
  return ipToInt(end) - ipToInt(start);
};

const result = ipsBetween("10.0.0.0", "10.0.0.50");
console.log("result--->", result);
