function lengthOfLastWord(s) {
    const wordsArray = s.split(" ");
    const lastWord = wordsArray[wordsArray.length - 1];
    return lastWord.length;
}

module.exports = lengthOfLastWord;