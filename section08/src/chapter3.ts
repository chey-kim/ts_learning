// 맵드 타입

interface User {
    id: number,
    name: string,
    age: number,
}

type PartialUser = {
    [key in keyof User]?: User[key]
}

type BooleanUser = {
    [key in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명 불러오기
function fetchUser(): ReadonlyUser {
    return {
        id: 1,
        name: 'chey',
        age: 20,
    }
}

// readonly
const user = fetchUser();
// user.name = 'asd';

// 유저 수정
function updateUser(user: User) {
    // 수정 기능
}


updateUser({
    ...fetchUser(),
    age: 25,
})