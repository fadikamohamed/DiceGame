import { inputReader } from "../script/tools";
import { Gamer } from "./joueur";
import { Gobelet } from "./gobelet";

export class Game {
    _gamer: any[];
    _roundNrb: number;
    _gobelet: object;

    constructor (roundNrb: number, diceNrb: number = 2) {
        this._roundNrb = roundNrb;
        this._gamer = [];
        this._gobelet = new Gobelet(diceNrb);
    }

    initialize = (gamerNbr: number) => {
        for(let i = 0; i < gamerNbr; i++){
            let name = Math.random().toString(36).replace(/[^a-z]+/g, '');
            name = name[0].toUpperCase() + name.substring(1);
            this._gamer.push(new Gamer(name));
        }
    }

    launch = () => {
        for(let i = 0; i < this._roundNrb; i++){
            console.log(`\n\nTour n°${i + 1}`);
            this._gamer.map((value, index) => {
                value.play(this._gobelet);
            });
        }
    }

    showWinner = () => {
        let name = "";
        let score: number = 0;
        this._gamer.map((value, index) => {
            if(value._score > score){
                name = value._name;
                score = value._score;
            }
        });

        console.log(`\n\nLe vainqueur est "${name}" avec un total de ${score} points ! Felicitation ! ! !\n\n`)

    }


}