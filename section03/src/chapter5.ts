// 타입 추론
let a = 10;
let b = 'hello';

let c = {
    id: 1,
    name: 'chey',
    profile: {
        nickname: 'seop',
    },
    urls: ['https://github.com/chey', 'https://www.naver.com/'],
};

let {id, name, profile} = c;
let [one, two, three] = [1, 'hello', true];

function func(msg = 'hello') {
    return 'hello';
}

let d;

d = 1;
d.toFixed();

d = 'hello';
d.toUpperCase();


// 타입리터럴로 지정
const num = 10;
const str = 'hello';

let arr = [1, 'string'];
