// 인터페이스

interface Person {
    readonly name: string;
    age?: number;

    sayHello?(): void;

    sayHello?(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
    name: 'chey',
    age: 20,
    sayHello: () => {
        console.log('hello');
    }
}

const person2: Person = {
    name: 'chey',
}
