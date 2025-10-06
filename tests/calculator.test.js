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
