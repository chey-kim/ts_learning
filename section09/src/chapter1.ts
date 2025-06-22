// 분산적인 조건부 타입
type StringNumberSwitch<T> = [T] extends [number] ? string : number;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;
// 1 단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2 단계
// number
// string
// number

// 결과
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;


// Record<K, V>
type ThumbnailLegacy = {
    large: {
        url: string;
    },
    medium: {
        url: string;
    },
    small: {
        url: string;
    },
    watch: {
        url: string;
    }
}

type CustomRecord<K extends keyof any, V> = {
    [key in K] : V;
}

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', {
    url: string;
    size: number;
}>