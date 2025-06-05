// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용하는 타입
let anyVar: any = 10;
anyVar = "hello";

// 이런것도 가능
let num: number = anyVar;

anyVar = true;
anyVar = {};
anyVar = () => {
};

// unknown
// unknown 문자열이던 숫자던 다 들어올 수 있다.
let unknownVar: unknown = 10;
unknownVar = "hello";

let num2: number = 0;

// 불가
// num2 = unknownVar;
// unknownVar.toUpperCase();

// 다만 아래와 같이 valid 할 경우 가능 (type 정제)
if (typeof unknownVar === "number") {
    num2 = unknownVar;
}




