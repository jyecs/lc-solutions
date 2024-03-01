const reverseWords = require("../solutions/reversewordsinstring.js");

test("One word reverses correctly", () => {
    expect(reverseWords("Hello")).toBe("Hello");
});

test("Simple string reverses correctly", () => {
    expect(reverseWords("Hello World")).toBe("World Hello");
});

test("Simple string with extra spaces reverses correctly", () => {
    expect(reverseWords("Hello    World")).toBe("World Hello");
});

test("Simple string with extra spaces and space padding reverses correctly", () => {
    expect(reverseWords(" Hello     World    ")).toBe("World Hello");
});