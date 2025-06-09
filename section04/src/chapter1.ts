// 함수 타입 표현식 (function type expression)
type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;


// 호출 시그니처 (call signature)
type Operation2 = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    name: string, // 객체이기에 프로퍼티를 추가할 수도 있다.
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;