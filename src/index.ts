//TODO

import { Game } from "./classes/partie";

const go = () => {
    const game: Game = new Game(5, 4);
    game.initialize(5);
    game.launch();
    game.showWinner();
}

go();
