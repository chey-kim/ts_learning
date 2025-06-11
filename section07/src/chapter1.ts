// 첫번째 사례

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap('1', 2);

// 두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

const a2 = returnFirstValue([1, 2, 3]);
let returnFirstValue1 = returnFirstValue([1, 'asd', 'asdasd']);


// 세번째 사례
function getLen<T extends { length: number }>(data: T) {
    return data.length;
}

let len = getLen([1, 2, 3, 4]);
let len1 = getLen('hello');
let len2 = getLen({length: 10});
console.log(len, len1, len2);

