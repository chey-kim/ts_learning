// 제네릭
function func<T>(value: T): T {
    return value;
}

func(10);
func(true);

let arr = func<[number, number, number]>([1, 2, 3]);