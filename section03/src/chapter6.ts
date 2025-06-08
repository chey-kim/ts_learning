// 타입 단언 (type assertion)
type Person = {
    name: string,
    age: number,
}
let person = {} as Person;
person.name = 'chey';
person.age = 20;

type Dog = {
    name: string,
    color: string,
};

let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
} as Dog;


// 타입 단언 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// 불가 number 는 string의 슈퍼타입도 서브타입도 아니기에..
// let num3 = 10 as string;

// 이건 되기는 한다.
let num3 = 10 as unknown as string;


// const 단언
let num4 = 10 as const;

// 객체에 as const 하면 모든 프로퍼티 값이 리드온리가 된다
let cat = {
    name: '야옹',
    color: 'yellow',
} as const;


type Post = {
    title: string;
    author?: string;
    content: string;
};

let post: Post = {
    title: 'hello',
    content: 'hello world',
    author: 'chey',
};

// Non Null 단언
const len: number = post.author!.length;