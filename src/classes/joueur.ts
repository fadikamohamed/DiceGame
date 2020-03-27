export class Gamer {

    _name: string;
    _score: number;

    constructor (name: string) {
        this._name = name;
        this._score = 0;
    }

    getName (){
        return this._name;
    }

    getScore (){
        return this._score;
    }

    play(gobelet: any){
        console.log(`\n${this._name} lance les dés.`);
        gobelet.launch();
        this._score += gobelet._gScore;
        this.showScore()
    }

    showScore = () => {
        console.log(`Le totale de ces points est maintenant de ${this._score}`);
    }
}