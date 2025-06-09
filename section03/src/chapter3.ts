// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
// 객체 타입은 프로퍼티를 기준으로 슈퍼타입과 서브타입이 나뉜다.
type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: '기린',
    color: 'brown',
}

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
}

animal = dog;

// 불가
// dog = animal;


type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한입크기',
    price: 10000,
    skill: 'javascript',
};

book = programmingBook;

// 초과 프로퍼티 검사
let boo2: Book = {
    name: '한입크기',
    price: 10000,
    // skill: 'javascript',
};

// 가능
let book3: Book = programmingBook;
function func(book: Book) {}
func(programmingBook);