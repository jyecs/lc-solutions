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