const stack = require('./stack');

function mulBase(num, base) {
    var s = new stack.Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
return converted;
}

console.log(mulBase(125,2))