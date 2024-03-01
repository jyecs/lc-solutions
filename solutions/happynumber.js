/*
Small note that I don't really know exactly how import/export works.
Generally if this was Java, I would have overloaded the isHappy() function instead.
When I overloaded the function, the Jest testing would not work correctly.

Problem: A number is happy if the squared sum of digits is eventually equal to 1;
Ex: 19 = 1^2 + 9^2
    82 => 68
    68 => 100
    100 => 1
    so 19 is happy.

Ex: 2 is not happy.
*/
function isHappy(n) {
    return isHappyRecursive(n, []);
}

function isHappyRecursive(number, seen) {
    if (number === 1) { return true };
    let num = number;
    let sum = 0;
    while (num != 0) {
        sum += Math.pow(num % 10, 2);
        num = Math.trunc(num / 10);
    }
    if (seen.includes(sum)) { return false };
    seen.push(sum);
    return isHappyRecursive(sum, seen);
}
module.exports = isHappy; 