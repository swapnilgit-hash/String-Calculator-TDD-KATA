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
