const lengthOfLastWord = require("../solutions/lengthoflastword.js");

test("Only one word returns correct length", ()=> {
    expect(lengthOfLastWord("Hello")).toBe(5);
});

test("Multiple words returns correct length", ()=> {
    expect(lengthOfLastWord("This will return four")).toBe(4);
});