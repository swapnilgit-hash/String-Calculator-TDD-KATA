function add(numbers) {
  if (numbers === "") return 0; // case: empty string

  const parts = numbers.split(/,|\n/); // split by comma or newline
  return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

module.exports = add;
