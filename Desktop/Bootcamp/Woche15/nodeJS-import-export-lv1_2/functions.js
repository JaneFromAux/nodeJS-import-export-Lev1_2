
function firstIndex(arr) {
    let firstInd = arr[0];
    return firstInd
}

function allWithoutLast([...arr]) {
    let allWithout = arr.pop();
    return arr;
}
function last(arr) {
    let lasti = [...arr].pop();
    return lasti;
}

function allWhithoutFirst(arr) {
    array = [...arr]
    let allWithout = array.shift();
    return array
}

function positionN(arr, index) {
    let posN = arr[index];
    if (index < 0 || index > arr.length) {
        return arr[arr.length - 1];
    } else {
        return posN
    }
}

function removeIt(arr, removeEle) {
    return arr.filter(ele => ele === removeEle)
}

function uniqueEle(data) {
    return [...new Set(data)];
}
function sumArr(data) {
    return data.reduce((a, b) => {
        a = a + b;
        return a
    })
}
function randomNum(num1, num2) {
    let random = Math.random() + num1;
    if (num1 < random && random < num2) {
        return random
    }
}

function firstUpper(word) {
    let firstLetter = (word).slice(0, 1);
    return (firstLetter.toUpperCase()).concat((word).slice(1, word.length));
}
function allUpper(word) {
    return word.toUpperCase();
}
function lastLetterTest(word1, word2) {
    let last1 = (word1).slice(word1.length - 1, word1.length)
    let last2 = (word1).slice(word1.length - 1, word1.length)
    if (last1 === last2) {
        return true
    } else {
        return false
    }
}

module.exports = {
    firstIndex,
    allWithoutLast,
    last,
    allWhithoutFirst,
    positionN,
    removeIt,
    uniqueEle,
    sumArr,
    randomNum,
    firstUpper,
    allUpper,
    lastLetterTest
}