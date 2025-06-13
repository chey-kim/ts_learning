// map
const arr = [1, 2, 3];
const newArr: number[] = arr.map((item: number) => {
    return item * 2;
});


function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map([1, 2, 3], (item) => {
    return item * 2;
});

let map1 = map(['hi', 'hello', 'hey'], (item) => parseInt(item));


// forEach

const arr2 = [1, 2, 3];
// arr2.forEach((item) => {
//     console.log(item);
// });

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

forEach(arr2, (item) => {
        // console.log(item.toFixed());
    }
)

forEach(['123', '456'], (item) => {
    // console.log(item.toUpperCase());
});
