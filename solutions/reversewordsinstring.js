function reverseWords(s) {
    const reversedArray = s.split(" ").reverse();
    // removes extra "" terms from the split.
    const filteredArray = reversedArray.filter((word) => {
        return word !== "";
    })
    let reversed = "";

    for (let i = 0; i < filteredArray.length; i++) {
        if (reversed === "") {
            reversed = filteredArray[i];
        } else {
            reversed += ` ${filteredArray[i]}`;
        }
    }

    return reversed;
}

module.exports = reverseWords;