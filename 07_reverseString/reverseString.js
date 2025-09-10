const reverseString = function(word) {//"hello"
    let reversedWord = "";
    for (let i = word.length-1; i >= 0; i--)
    {
        reversedWord += word[i];
    }
    console.log("reversedWord");
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
