// 객체 리터럴
let user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'chey',
}


let dog: {
    name: string,
    color: string
} = {
    name: "돌돌이",
    color: "brown"
}

// ? 를 붙이면 해당 값은 있어도 되고 없어도 된다.
// 옵셔널 프로퍼티 & 선택적 프로퍼티
let user2: {
    id?: number,
    name: string,
} = {
    name: "chey",
}

// 값이 수정되면 안되는 프로퍼티의 경우 readonly
let config: {
    readonly apiKey: string
} = {
    apiKey: "my api key",
}
