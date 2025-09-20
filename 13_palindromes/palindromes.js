const palindromes = function (sentence) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let filteredSentence = sentence
    .toLowerCase()
    .split("")
    .filter(character => alphanumerical.includes(character))
    .join("");

    let newSentence = filteredSentence.split("").reverse().join("");
    return newSentence === filteredSentence;
};

// Do not edit below this line
module.exports = palindromes;
