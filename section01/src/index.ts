// import {hello} from './hello';
// hello('qwdqwd');

// const func = () => {
//     console.log('Hello World');
// }

// ts 는 파일 내 export 가 없을 경우 해당 파일은 전역에서 처리되는 것으로 판단하여
// 다른 파일에 동일한 변수명이 동일한 스코프에 존재하는 경우 에러를 발생시킨다.
// moduleDetection를 tsconfig.json 에서 force로 설정하면 해당 에러는 발생하지 않는다.
// moduleDetection : force는 컴파일시 파일에 export {}; 를 자동생성한다.

const a = 1;
