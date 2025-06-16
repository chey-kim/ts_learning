// 프로미스

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        reject('error');
    }, 3000);
});

promise.then((res) => {
    console.log(res * 10);
}).catch((err) => {
    if (typeof err === 'string') {
        console.log(err);
    }
});


// 프로미스를 반환하는 함수의 타입을 정의
// server -> 1개의 게시물을 불러오는 함수
interface Post {
    id: number,
    title: string,
    content: string,
}

function fetchPost(id: number): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: 'hello',
                content: 'hi',
            });
        }, 3000);
    });
}

const postRequest = fetchPost(1);
postRequest.then((res) => {
    res.id;
})