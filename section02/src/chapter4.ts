let user: {
    id: number,
    name: string,
    nickname: string,
    birth: string,
    bio: string,
    location: string,
} = {
    id: 1,
    name: 'chey',
    nickname: 'seop',
    birth: '1995.10.27',
    bio: 'hi',
    location: 'seoul'
}

// type 별칭
type User = {
    id: number,
    name: string,
    nickname: string,
    birth: string,
    bio: string,
    location: string,
}

let user2: User = {
    id: 1,
    name: 'chey',
    nickname: 'seop',
    birth: '1995.10.27',
    bio: 'hi',
    location: 'seoul'
}

// type 정의 시 동일 스코프 내에서는 동일 이름 선언 불가
// 함수 내에서는 가능
function func() {
    type User = {}
}


// 인덱스 시그니처
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryCodes = {
    [key: string]: string,
}

let countryCodes2: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}

type CountryNumberCodes = {
    [key: string]: number,
    Korea: number, // Korea Property is missing in type
}

let countryNumberCodes2: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}