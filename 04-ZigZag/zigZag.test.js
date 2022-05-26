const convert = require("./zigZag");

test("ZigZag => PAYPALISHIRING with 3 should return PAHNAPLSIIGYIR", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test("ZigZag => PAYPALISHIRING with 4 should return PAHNAPLSIIGYIR", () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test("ZigZag => A with 1 should return A", () => {
  expect(convert("A", 1)).toBe("A");
});
