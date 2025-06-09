// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재한다.


// 합집합 타입 - Union Type
let a: string | number | true;
a = 10;
a = 'hello';
a = true;


let arr: (string | number | boolean)[] = ['hello', 10];

// 객체로 만드는 union type
type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: '',
    color: '',
}

let union2: Union1 = {
    name: '',
    language: '',
}

let union3: Union1 = {
    name: '',
    color: '',
    language: '',
};

// 이렇게는 불가
// let union4: Union1 = {
//     name: '',
// }


// 교집합 타입 - Intersection Type
// 기본 타입의 변수로는 대부분 never로 나온다.
let variable: number & string;

type Intersection = Dog & Person;
let intersection1: Intersection = {
    name: '',
    color:'',
    language: '',
}
