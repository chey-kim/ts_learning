// 제네릭 클래스 (Generic class)

class NumberList {
    constructor(private list: number[]) {
    }

    push(data: number) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

class List<T>{
    constructor(private list: T[]) {}
    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const list = new List<string>(['123', '456', '789']);
list.pop();
list.push('111');
list.print();