const removeFromArray = function(receivedArray, ...removingElements) {
    return receivedArray.filter(element => !removingElements.includes(element));
};
// Do not edit below this line
module.exports = removeFromArray;
