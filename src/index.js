import { BlackJack } from './lib/blackjack.js';
var blackjack = new BlackJack();
BlackJack.START_BUTTON.style.display = 'none';
BlackJack.GAME_BUTTONS.style.display = 'none';
BlackJack.PLAY_AGAIN_BUTTON.style.display = 'none';
BlackJack.CHIP_BUTTONS.style.display = 'none';
BlackJack.PLAY_HAND_BUTTON.style.display = 'none';
var startGame = function () {
    blackjack.start();
};
var displayDepositMoneyOverlay = function () {
    BlackJack.MODAL_OVERLAY.style.display = 'flex';
};
var depositMoney = function (amount) {
    blackjack.player.depositMoney(amount);
    BlackJack.MODAL_OVERLAY.style.display = 'none';
    BlackJack.BALANCE.innerText = "Remaining Balance: $".concat(blackjack.player.money);
    BlackJack.START_BUTTON.style.display = "block";
    BlackJack.DEPOSIT_MONEY.style.display = "none";
};
export { startGame, displayDepositMoneyOverlay, depositMoney };
