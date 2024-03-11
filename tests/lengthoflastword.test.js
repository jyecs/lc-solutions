const lengthOfLastWord = require("../solutions/lengthoflastword.js");

test("Only one word returns correct length", ()=> {
    expect(lengthOfLastWord("Hello")).toBe(5);
});

test("Multiple words returns correct length", ()=> {
    expect(lengthOfLastWord("This will return four")).toBe(4);
});

test("Multiple words with padding", ()=> {
    expect(lengthOfLastWord(" This should be five, just kidding  ")).toBe(7);
})