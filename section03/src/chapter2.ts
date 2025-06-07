// Unknown type
// 모든 타입의 최상위 타입
function unknownExam() {
    // up casting 가능
    let a: unknown;
    let b: unknown = 'hello';
    let c: unknown = 10;
    let d: unknown = true;
    let e: unknown = {};
    let f: unknown = null;

    // down casting 불가
    // let unknownVar: unknown;
    // let num: number = unknownVar;
}

// Never type
// 모든 타입의 서브 타입 (최하위 타입)
// 모든 타입의 부분 집합 (공집합)
function neverExam() {
    function neverFunc(): never {
        while (true) {
        }
    }

    // 가능
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
    let obj: object = neverFunc();
    let arr: any[] = neverFunc();
    let nullVal: null = neverFunc();
    let undefVal: undefined = neverFunc();
    let neverVal: never = neverFunc();

    // 불가
    // let never1: never = 10;
    // let never2: never = 'string';
}


// Void type
// void -> undefined
function voidExam() {
    function voidFunc(): void {
        console.log('hello');
        return undefined;
    }

    let voidVar: void = undefined;
}


// any type
// 모든 타입의 슈퍼타입 서브타입으로 존재한다. 단 never 빼고
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVal: undefined = undefined;
    let neverVal: never;

    anyVar = unknownVar;
    undefinedVal = anyVar;

    // never 는 불가
    // neverVal = anyVar;
}