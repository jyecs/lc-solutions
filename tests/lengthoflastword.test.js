const lengthOfLastWord = require("../solutions/lengthoflastword.js");

test("Only one word returns correct length", ()=> {
    expect(lengthOfLastWord("Hello")).toBe(5);
});

