// Task 1: Convert a string to a number
function stringToNumber(input) {
    if (input === null || input === undefined) {
        return "Not a number";
    }
    
    let num = Number(input);

    if (!isNaN(num) && String(input).trim() !== "") { 
        return num;
    } else {
        return "Not a number";
    }
}

// Task 2: Flip the boolean value of an input
function flipBoolean(input) {
    return !Boolean(input);
}

// Task 3: Identify the type of input
function whatAmI(input) {
    let type = typeof input;
    return `I'm a ${type}!`;
}

// Task 4: Check if the input is truthy or falsy
function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

// ✅ Test Cases for stringToNumber
console.log(stringToNumber("123"));     // 123
console.log(stringToNumber("42.5"));    // 42.5
console.log(stringToNumber("abc"));     // "Not a number"
console.log(stringToNumber("   5   ")); // 5
console.log(stringToNumber(""));        // "Not a number"
console.log(stringToNumber(" "));       // "Not a number"
console.log(stringToNumber("0"));       // 0
console.log(stringToNumber(null));      // "Not a number"
console.log(stringToNumber(undefined)); // "Not a number"
console.log(stringToNumber("-10"));     // -10
console.log(stringToNumber("3.14159")); // 3.14159

// ✅ Test Cases for flipBoolean
console.log(flipBoolean(true));    // false
console.log(flipBoolean(false));   // true
console.log(flipBoolean(0));       // true
console.log(flipBoolean(1));       // false
console.log(flipBoolean("hello")); // false
console.log(flipBoolean(""));      // true
console.log(flipBoolean(null));    // true
console.log(flipBoolean([]));      // false

// ✅ Test Cases for whatAmI
console.log(whatAmI(123));       // "I'm a number!"
console.log(whatAmI("hello"));   // "I'm a string!"
console.log(whatAmI(true));      // "I'm a boolean!"
console.log(whatAmI({}));        // "I'm a object!"
console.log(whatAmI([]));        // "I'm a object!"
console.log(whatAmI(null));      // "I'm a object!"
console.log(whatAmI(undefined)); // "I'm a undefined!"

// ✅ Test Cases for isItTruthy
console.log(isItTruthy(0));       // "It's falsey!"
console.log(isItTruthy("hello")); // "It's truthy!"
console.log(isItTruthy(null));    // "It's falsey!"
console.log(isItTruthy([]));      // "It's truthy!"
console.log(isItTruthy(""));      // "It's falsey!"
console.log(isItTruthy(1));       // "It's truthy!"
console.log(isItTruthy(undefined)); // "It's falsey!"
console.log(isItTruthy(NaN));     // "It's falsey!"
console.log(isItTruthy("false")); // "It's truthy!" (since non-empty strings are truthy)
