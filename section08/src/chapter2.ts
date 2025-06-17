// keyof 연산자

// interface Person {
//     name: string;
//     age: number;
// }


type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: 'chey',
    age: 20,
}

getPropertyKey(person, 'name');