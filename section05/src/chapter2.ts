// 선언 합침 (declaration merging)
// 인터페이스는 중복 선언이 가능하다.

interface Person {
    name: string;
    age: number;
}

interface Person {
    name: string;
    bread: string;
}

interface Developer extends Person {
    name: 'hello';
}

const person: Person = {
    name: 'chey',
    age: 20,
    bread: 'wheat',
}

// 모듈 보강

interface Lib {
    a: number;
    b: number;
}

// 이런게 보강
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello',
}
