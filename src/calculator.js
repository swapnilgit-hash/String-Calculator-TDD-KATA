function add(numbers) {
  if (numbers === "") return 0; // case: empty string

  let delimiterRegex = /,|\r?\n/; // comma or nwline as default delimiters

  if (numbers.startsWith("//")) {
    const [header, rest] = numbers.split("\n");
    let customDelimiter = header.slice(2);

    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    delimiterRegex = new RegExp(customDelimiter);
    numbers = rest;
  }

  const parts = numbers.split(delimiterRegex);

  const negatives = parts.filter((n) => parseInt(n, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives numbers not allowed: ${negatives.join(",")}`);
  }

  return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

module.exports = add;
