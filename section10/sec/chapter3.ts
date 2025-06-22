// Exclude<T, U>
// - 제외하다, 추방하다.
// - T에서 U를 제거하는 타입
type CustomExclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 2단계
// string - boolean extends 관계 x == T
// boolean - boolean extends 관계 o == never
type A = Exclude<string | boolean, boolean>;


// Extract<T, U>
// - T에서 U를 추출하는 타입
type CustomExtract<T, U> = T extends U ? T : never;
type B = CustomExtract<string | boolean, boolean>;


// ReturnType<T>
// - 함수의 반환값 타입을 추출하는 타입

type CustomReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;


function funcA() {
    return 'hello';
}

function funcB() {
    return 1;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;