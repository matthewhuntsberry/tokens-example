const add = require(".");

test('should add 1 + 2', () => {
  expect(add(1, 2)).toEqual(3);
 })