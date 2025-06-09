// 인터페이스 확장
interface Animal {
    name: string;
    age: number;
}

// interface가 아닌 type과 같이 객체면 다 가능하다.
interface Dog extends Animal {
    name: string;
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const dog: Dog = {
    name: 'noname',
    age: 20,
    isBark: true,
}

const cat: Cat = {
    name: 'chey',
    age: 20,
    isScratch: true,
}

const chicken: Chicken = {
    name: 'chey',
    age: 20,
    isFly: true,
}

// 다중 상속 가능
interface DogCat extends Dog, Cat {
    name: 'chey';
    age: 20;
    isBark: true;
    isScratch: true;
}