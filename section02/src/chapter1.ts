// number
// : number < 타입 어노테이션
let num1: number = 123;
let num2: number = 456;
let num3: number = Infinity;
let num4: number = -Infinity;
let num5: number = NaN;

// string
let str1: string = 'hello';
let str2: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// literal type
// 타입어노테이션에 지정된 값만 할당 가능하다.
let literal1: 'hello';
let literal2: 'hello' | 'world';
let literal3: 'hello' | 'world' | 'bye';
let literal4: 10 = 10;

