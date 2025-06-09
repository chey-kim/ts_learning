// hm... 애초에 오버로드 시그니처 없어도 작동하는 코드 아닌가..

// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라
// 여러가지 버전으로 만드는 문법
// -> func() 함수를 생성하고 매개변수의 수에 따른 기능을 정의한다.
// 1개 : 매개변수 * 20
// 3개 : 전체 합

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

func(1);
func(1, 2, 3);
