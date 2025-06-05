// number array
let numArr: number[] = [1, 2, 3];

// string array
let strArr: string[] = ['hello', 'im', 'chey'];

// boolean array
// 제네릭 문법
let boolArr: Array<boolean> = [true, false];

// union type
// 배열의 타입 요서가 n개일 경우
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열
let multiArr2: number[][] = [[1, 2], [3, 4]];

// tuple
// 길이와 타입이 고정된 배열
let tuple1: [number, number] = [2, 1];
let tuple2: [number, string, boolean] = [2, 'hello', true];

const users: [string, number][] = [
    ['김태섭0', 1],
    ['김태섭1', 2],
    ['김태섭2', 3],
    ['김태섭3', 4],
    ['최아무개', 5],
    // [5, '최아무개2'],
];

