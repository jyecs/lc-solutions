function lengthOfLastWord(s) {
    const wordsArray = s.split(" ");
    const filteredArray = wordsArray.filter((word) => {
        return word.length > 0;
    })
    const lastWord = filteredArray[filteredArray.length - 1];
    return lastWord.length;
}

module.exports = lengthOfLastWord;