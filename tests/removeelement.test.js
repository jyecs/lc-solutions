const removeElement = require("../solutions/removeelement.js");

test("remove element on 1 element where value is that element returns 1", () => {
    const val = 2;
    const nums = [2];
    expect(removeElement(nums, val)).toBe(0);
    expect(nums).toStrictEqual([2]);
});

test("remove element on 1 element where value is not that element returns 1", () => {
    const val = 1;
    const nums = [2];
    expect(removeElement(nums, val)).toBe(1);
    expect(nums).toStrictEqual([2]);
});

test("remove element on non-trivial nums array", () => {
    const val = 1;
    const nums = [2, 2, 1, 2];
    expect(removeElement(nums, val)).toBe(3);
    expect(nums).toStrictEqual([2, 2, 2, 1]);
});

test("remove element on non-trivial nums array different", () => {
    const val = 3;
    const nums = [3, 2, 2, 3];
    expect(removeElement(nums, val)).toBe(2);
    expect(nums).toStrictEqual([2, 2, 3, 3]);
});

test("remove element on non-trivial larger nums array", () => {
    const val = 1;
    const nums = [2, 2, 1, 2, 1, 2, 3, 5, 6];
    expect(removeElement(nums, val)).toBe(7);
    expect(nums).toStrictEqual([2, 2, 2, 2, 3, 5, 6, 1, 1]);
});