// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// JS : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// TS : 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => {
    return a + b;
};


// age 가 tall보다 뒤에 오면 안된다.
// 선택적 매개변수는 필수 매개변수 뒤에 와야하기에..
function introduce(name: string = 'chey', age: number, tall?: number) {
    console.log(`hello ${name}`);
    if (tall) {
        console.log(`tall is ${tall + 10}`);
    }
}

function getSum(...numbers: number[]): number {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
}

let sum = getSum(1, 2, 3, 4, 5);
console.log(sum)
