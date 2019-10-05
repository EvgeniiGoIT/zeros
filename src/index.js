module.exports = function zeros(expression) {
  expression = expression.split("*");
  const result = expression
    .map(e => {
      return factorial(parseInt(e), e.includes("!!"));
    })
    .reduce((acc, e) => (acc = multiply(`${acc}`, `${e}`)))
    .split("")
    .reverse();
  let i = 0;
  while (result[i] === "0") {
    i++;
  }
  return i;

  function multiply(first, second) {
    first = first.split("");
    second = second.split("");
    let result = [];
    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        result[i + j]
          ? (result[i + j] += first[i] * second[j])
          : (result[i + j] = first[i] * second[j]);
      }
    }
    result = result.reverse();
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] >= 10) {
        result[i + 1] += Math.floor(result[i] / 10);
        result[i] = result[i] % 10;
      }
    }
    return result.reverse().join("");
  }

  function factorial(num, value) {
    if (num === 0 || num === 1) {
      return 1;
    }
    if (value) {
      if (num % 2 === 0) {
        for (let i = num - 2; i >= 2; i -= 2) {
          num = multiply(`${num}`, `${i}`);
        }
        return num;
      } else {
        for (let i = num - 2; i >= 1; i -= 2) {
          num = multiply(`${num}`, `${i}`);
        }
        return num;
      }
    }
    for (let i = num - 1; i >= 1; i--) {
      num = multiply(`${num}`, `${i}`);
    }
    return num;
  }
};
