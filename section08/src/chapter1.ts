// 인덱스드 엑세스 타입

type PostList = {
    title: string,
    content: string,
    author: {
        id: number,
        name: string,
        age: number,
    },
}[];

function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.name} - ${author.id}`);
}


// number를 넣으면 하나의 요소만 가져온다 라는 의미 , 숫자를 넣어도 무방
const post: PostList[number] = {
    title: 'hello',
    content: 'hi',
    author: {
        id: 1,
        name: 'chey',
        age: 20,
    },
}

type Tup = [number, string, boolean];
type Typ0 = Tup[0];
type Typ1 = Tup[1];
type Typ2 = Tup[2];