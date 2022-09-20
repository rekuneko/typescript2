"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFunction = exports.replace = exports.isValid = void 0;
//2
var isbn = "123456789";
var val;
console.log(isbn);
function isValid(isbn) {
    if (!isbn)
        return false;
    if (isbn.length !== 10)
        return false;
    const lastChar = isbn.slice(-1);
    let sum = 0;
    let mult = 10;
    let mod = 0;
    Array.from(isbn.slice(0, -1)).forEach(a => {
        sum += Number(a) * mult;
        mult--;
    });
    if (lastChar == 'X') {
        sum += 10;
    }
    else {
        sum += Number(lastChar);
    }
    mod = sum % 11;
    if (mod == 0) {
        val = true;
    }
    else {
        val = false;
    }
    return val;
}
exports.isValid = isValid;
console.log(isValid(isbn));
//3
var str = "Cat30";
console.log(str);
const replace = (str) => {
    var newStr1 = str.replace(/[a-z]/gi, function (c) {
        switch (c) {
            case 'z': return 'a';
            case 'Z': return 'A';
            default: return String.fromCharCode(1 + c.charCodeAt(0));
        }
    });
    var newStr2 = newStr1.split('').reduce((a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
    console.log(newStr2);
};
exports.replace = replace;
(0, exports.replace)(str);
//4
var qArray = [false, 1, 0, 2, 0, 3, "a"];
var newArray = qArray.filter(c => c !== 0).concat(qArray.filter(k => k == 0));
const testFunction = () => {
    console.log(newArray);
};
exports.testFunction = testFunction;
(0, exports.testFunction)();
