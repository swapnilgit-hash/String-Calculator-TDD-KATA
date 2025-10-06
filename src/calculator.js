function add(numbers) {
  if (numbers === "") return 0; // case: empty string
  if (!numbers.includes(",")) return parseInt(numbers, 10); // case: single number

  return numbers.split(",").reduce((sum, n) => sum + parseInt(n, 10), 0);
}

module.exports = add;
