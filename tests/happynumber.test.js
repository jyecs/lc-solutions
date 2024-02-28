const isHappy = require("../solutions/happynumber");

test("easiest happy number: 1", () => {
    expect(isHappy(1)).toBe(true);
});

test("non-trivial happy number returns true", () => {
    expect(isHappy(19)).toBe(true);
});

test("Non-happy number return true", () => {
    expect(isHappy(2)).toBe(false);
});