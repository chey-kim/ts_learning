// 인터페이스와 클래스

interface CharacterInterface {
    name: string;
    moveSpeed: number;

    move(): void;
}

// interface 구현 객체는 필드가 무조건 public 이다.
// 만약 public이 아닌 필드가 필요한 경우 인터페이스에 선언하지 말고 구현 객체 필드에 선언해야한다.
class CharacterClass implements CharacterInterface {
    private _name: string;
    private _moveSpeed: number;

    constructor(name: string, moveSpeed: number) {
        this._name = name;
        this._moveSpeed = moveSpeed;
    }

    move(): void {
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get moveSpeed(): number {
        return this._moveSpeed;
    }

    set moveSpeed(value: number) {
        this._moveSpeed = value;
    }
}