// Pick<T, K>
// - 뽑다. 고르다.
// - 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type CustomPick<T, K extends keyof T> = {
    [key in K]: T[key];
};

const legacyPost: CustomPick<Post, 'title' | 'content'> = {
    title: '옛날 글',
    content: '옛날 콘텐츠',
};

console.log(legacyPost);

type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit<T, K>
// - 생략하다 빼다
// - 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
const noTitlePost : Omit<Post, 'title'> = {
    content : '',
    tags: [],
    thumbnailURL: '',
}

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