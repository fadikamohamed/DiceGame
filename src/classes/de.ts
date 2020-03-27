
export class Dice {
    _value: number;

    constructor (value: number = 0) {
        this._value = value;
    }

    getValue() {
        return this._value;
    }

    launch = () => {
        this._value = Math.floor(Math.random() * 6) + 1;
    }
}