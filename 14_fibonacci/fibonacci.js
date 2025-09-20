const fibonacci = function(index) {
    let number = 0;
    if (typeof index !== 'number') {
        number = parseInt(index);
    } else {
        number = index;
    }

    let previousNumber = 0;
    let nextNumber = 1;
    
    if (number === nextNumber || number === previousNumber) {
        return number;
    } else if (number < 0) {
        return "OOPS";
    }
    for (let i = 0; i < number-1; i++) {
        nextNumber += previousNumber; //1 : 1 - 0, 2: 1 - 1, 
        previousNumber = (nextNumber <= 1) ? 1 : nextNumber - previousNumber; 
    }
    return nextNumber;
};

// Do not edit below this line
module.exports = fibonacci;
