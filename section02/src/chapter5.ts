// enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// role - 0 : admin, 1 : user

// 수를 할당하지 않아도 0부터 순차적으로 카운팅됩니다.
// 첫 값을 기준으로 잡기에 첫 값에만 10을 주면 밑으로 1씩 카운팅되어 할당됩니다.
// 만약 두 번째 값에만 있다고 한다면 첫 값은 0, 두 번째 값부터는 지정된 값부터 카운팅됩니다.
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    KOREA = 'ko',
    ENGLISH = 'en',
}

type User = {
    name: string,
    role: Role,
    age: number,
    language: Language[],
};

const user1: User = {
    name: 'chey',
    role: Role.ADMIN,
    age: 20,
    language: [Language.KOREA],
}

const user2: User = {
    name: 'user1',
    role: Role.USER,
    age: 20,
    language: [Language.ENGLISH],
}

const user3: User = {
    name: 'guest1',
    role: Role.GUEST,
    age: 22,
    language: [Language.KOREA, Language.ENGLISH],
}

console.log(user1, user2, user3);