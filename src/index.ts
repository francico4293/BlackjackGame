import { BlackJack } from "./lib/blackjack.js";

const blackjack = new BlackJack();

BlackJack.START_BUTTON.style.display = 'none';
BlackJack.GAME_BUTTONS.style.display = 'none';

const startGame = () => {
    blackjack.start();
}
