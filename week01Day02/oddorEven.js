function isOddOrEven(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 6;
console.log(isOddOrEven(num));