import { Deck } from './deck';
import { Player } from './player';
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.deck = Deck.build();
        this.dealer = Player.build();
        this.user = Player.build();
    }
    BlackJack.prototype.start = function () {
        BlackJack.BALANCE.innerText = "Remaining Balance: $".concat(5000);
        BlackJack.CURRENT_HAND.innerText = 'Current Hand: $0';
        BlackJack.USER_TOTAL.textContent = 'Your total: ';
        BlackJack.DEALER_TOTAL.textContent = 'Dealer Total: ';
        BlackJack.START_BUTTON.style.display = 'none';
        BlackJack.PLAY_AGAIN_BUTTON.style.display = 'none';
        BlackJack.USER_CARDS.innerHTML = '';
        BlackJack.DEALER_CARDS.innerHTML = '';
    };
    BlackJack.prototype.hit = function () { };
    BlackJack.prototype.stay = function () { };
    BlackJack.GAME_MESSAGE = document.getElementById('game-message');
    BlackJack.USER_CARDS = document.getElementById('user-cards');
    BlackJack.USER_TOTAL = document.getElementById('user-total');
    BlackJack.DEALER_CARDS = document.getElementById('dealer-cards');
    BlackJack.DEALER_TOTAL = document.getElementById('dealer-total');
    BlackJack.BALANCE = document.getElementById('balance-element');
    BlackJack.START_BUTTON = document.getElementById('start-button');
    BlackJack.GAME_BUTTONS = document.getElementById('game-buttons');
    BlackJack.PLAY_AGAIN_BUTTON = document.getElementById('play-again-button');
    BlackJack.MODAL_OVERLAY = document.getElementById("modal-overlay");
    BlackJack.DEPOSIT_MONEY = document.getElementById('deposit-money');
    BlackJack.CHIP_BUTTONS = document.getElementById('chips');
    BlackJack.CURRENT_HAND = document.getElementById('current-hand');
    BlackJack.PLAY_HAND_BUTTON = document.getElementById('play-hand-button');
    BlackJack.ONE_DOLLAR_CHIP = document.getElementById('one');
    BlackJack.FIVE_DOLLAR_CHIP = document.getElementById('five');
    BlackJack.TEN_DOLLAR_CHIP = document.getElementById('ten');
    BlackJack.TWENTY_FIVE_DOLLAR_CHIP = document.getElementById('twenty-five');
    BlackJack.ONE_HUNDRED_DOLLAR_CHIP = document.getElementById('one-hundred');
    return BlackJack;
}());
export { BlackJack };
