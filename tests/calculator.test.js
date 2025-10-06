const add = require("../src/calculator");

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns the number", () => {
  expect(add("1")).toBe(1);
});

test("two numbers comma-separated returns their sum", () => {
  expect(add("1,5")).toBe(6);
});

test("handle any amount of number", () => {
  expect(add("1,2,3,4,5")).toBe(15);
  expect(add("10,20,30")).toBe(60);
});

test("handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("10\n20\n30")).toBe(60);
});

test("support different Delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n1|2|3")).toBe(6);
  expect(add("//sep\n2sep3")).toBe(5);
});

test("single negative numbers throw an exception", () => {
  expect(() => add("-1,2")).toThrow("Negatives numbers not allowed: -1");
});

test("multiple negative numbers throw an exception", () => {
  expect(() => add("2,-4,3,-5")).toThrow(
    "Negatives numbers not allowed: -4,-5"
  );
});

test("ignore numbers bigger than 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,2,3")).toBe(1005);
  expect(add("1234,1")).toBe(1);
});
