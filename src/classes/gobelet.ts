import { Dice } from './de';

export class Gobelet {
    _value: number;
    _dice: any[];
    _diceNumber: number;
    _gScore: number;

    constructor(diceNumber: number) {
        this._value = 0;
        this._dice = [];
        this._gScore = 0;
        this._diceNumber = diceNumber;
        for (let i = 0; i < diceNumber; i++) {
            let dice: any = new Dice();
            this._dice.push(dice);
        }
    }

    getValue() {
        return this._value;
    }

    launch = () => {
        this._value = 0;
        this._gScore = 0;
        let total: number = 0;
        this._dice.map((value, index) => {
            value.launch();
            total += value.getValue();
            console.log(`Le dé n°${index + 1} à donné ${value.getValue()}.`);
        })

        console.log(`Pour une valeur totale de ${total}`);
        this._gScore += total;
    }

    showScore = () => {
        console.log(this._gScore);
    }
}