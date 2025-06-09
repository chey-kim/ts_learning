// 서로소 유니온 타입 (disjoint union type)
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함
// tag와 같이 string 리터럴로 잡으면 서로소 관계가 된다.
type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number
};
type Member = {
    tag: 'MEMBER';
    name: string,
    point: number,
};
type Guest = {
    tag: 'GUEST';
    name: string,
    visitCount: number,
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
    if (user.tag === 'ADMIN') {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === 'MEMBER') {
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    } else if (user.tag === 'GUEST') {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }

    throw new Error('no type');
}


// 복습겸 한가지 더 사례
// 비동기 작업의 결과를 처리하는 객체
// 이렇게 하는게 안전하지 않다.
type AsyncTask = {
    state: 'LOADING' | 'FAILED' | 'SUCCESS',
    error?: {
        message: string,
    },
    response?: {
        data: string,
    },
}

type LoadingTask = {
    state: 'LOADING',
}

type FailedTask = {
    state: 'FAILED',
    error: {
        message: string,
    },
}

type SuccessTask = {
    state: 'SUCCESS',
    response: {
        data: string,
    },
};

type UnionAsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 시 -> 에러메세지 출력
// 성공 시 -> 데이터 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING':
            console.log('loading...');
            break;
        case 'FAILED':
            console.log(task.error?.message);
            break;
        case 'SUCCESS':
            console.log(task.response?.data);
            break;
        default:
            throw new Error('no type');
    }
}

function processResult2(task: UnionAsyncTask) {
    switch (task.state) {
        case 'LOADING':
            console.log('loading...');
            break;
        case 'FAILED':
            console.log(task.error.message);
            break;
        case 'SUCCESS':
            console.log(task.response.data);
            break;
        default:
            throw new Error('no type');
    }
}

const loading: AsyncTask = {
    state: 'LOADING',
};

const failed: AsyncTask = {
    state: 'FAILED',
    error: {
        message: 'error message',
    },
};

const success: AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: 'data',
    },
};