// Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.

const list = require('./list');

const namesNumbers = new list.List();
const namesStrings = new list.List();

namesNumbers.append(1);
namesNumbers.append(2);
namesNumbers.append(3);

namesStrings.append('asd');
namesStrings.append('zxc');
namesStrings.append('qwe');

function appendLarger(element) {
    if (!isNaN(element) && Math.min.apply(null, namesNumbers.toString()) > element) {
        namesNumbers.append(element)
        return true
    }

    if (typeof element === 'string') {
        const sorted = [...namesStrings.toString()];

        sorted.sort((a ,b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })

        if (sorted[0] > element) {
            namesStrings.append(element);
            return true;
        }    
    }

    return false;
}

appendLarger('aaa');
appendLarger('zzz');
appendLarger(0);
appendLarger(2);

console.log(namesNumbers.toString(), namesStrings.toString());
