// 제네릭 인터페이스

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
}

let keyPair2: KeyPair<boolean, string> = {
    key: false,
    value: 'value',
}

interface NumberMap {
    [key: string]: number;
}

let numberMap: NumberMap = {
    key: 1,
    key2: 2,
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: 'string'
}

let booleanMap: Map<boolean> = {
    key: false,
}

// 제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: 'string',
}


// 제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    // if (user.profile.type !== 'student') {
    //     console.log('잘 못 옴');
    //     return;
    // }

    const school = user.profile.school;
    console.log(`${school} 등교`);
}

const devUser: User<Developer> = {
    name: 'chey',
    profile: {
        type: 'developer',
        skill: 'javascript',
    }
}

const studentUser: User<Student> = {
    name: 'chey3',
    profile: {
        type: 'student',
        school: 'hy',
    }
}

