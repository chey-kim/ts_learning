// void -> 공허
// void -> 아무것도 없음을 의미하는 타입
function func1(): string {
    return 'hello';
}

function func2(): void {
    console.log('hello');
}

let a: void;
// 불가
// a = 1;

// 가능
a = undefined;


// 반환을 하지 않는 것에 대해 never
// 존재하지 않는... 불가능한 타입에 대한 타입
function func3(): never {
    while (true) {
        func3();
    }
}

function func4(): never {
    throw new Error('error');
}

let a2: never;