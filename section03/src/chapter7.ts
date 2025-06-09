// 타입 좁히기 (type guard)
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법
type Person = {
    name: string,
    age: number,
};

function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        return value.toFixed();
    } else if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (value instanceof Date) {
        return value.getTime();
    } else if (value && 'age' in value) {
        console.log(value.age);
        return;
    }
    return value;
}
