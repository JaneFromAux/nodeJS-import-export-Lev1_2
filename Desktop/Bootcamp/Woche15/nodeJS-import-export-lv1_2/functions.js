
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
// remove certain element from array
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

module.exports = {
    firstIndex,
    allWithoutLast,
    last,
    allWhithoutFirst,
    positionN,
    removeIt,
    uniqueEle,
    sumArr,
    randomNum
}