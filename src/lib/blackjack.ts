import { Deck } from './deck';
import { Player } from './player';

export class BlackJack {
    public static readonly GAME_MESSAGE = document.getElementById('game-message')!;

    public static readonly USER_CARDS = document.getElementById('user-cards')!;

    public static readonly USER_TOTAL = document.getElementById('user-total')!;

    public static readonly DEALER_CARDS = document.getElementById('dealer-cards')!;
    
    public static readonly DEALER_TOTAL = document.getElementById('dealer-total')!;

    public static readonly BALANCE = document.getElementById('balance-element')!;

    public static readonly START_BUTTON = document.getElementById('start-button')!;

    public static readonly GAME_BUTTONS = document.getElementById('game-buttons')!;

    public static readonly PLAY_AGAIN_BUTTON = document.getElementById('play-again-button')!;

    public static readonly MODAL_OVERLAY = document.getElementById("modal-overlay")!;

    public static readonly DEPOSIT_MONEY = document.getElementById('deposit-money')!;

    public static readonly CHIP_BUTTONS = document.getElementById('chips')!;

    public static readonly CURRENT_HAND = document.getElementById('current-hand')!;

    public static readonly PLAY_HAND_BUTTON = document.getElementById('play-hand-button')!;

    public static readonly ONE_DOLLAR_CHIP = document.getElementById('one')!;

    public static readonly FIVE_DOLLAR_CHIP = document.getElementById('five')!;

    public static readonly TEN_DOLLAR_CHIP = document.getElementById('ten')!;

    public static readonly TWENTY_FIVE_DOLLAR_CHIP = document.getElementById('twenty-five')!;

    public static readonly ONE_HUNDRED_DOLLAR_CHIP = document.getElementById('one-hundred')!;

    public start() {
        BlackJack.BALANCE.innerText = `Remaining Balance: $${5000}`;
        BlackJack.CURRENT_HAND.innerText = 'Current Hand: $0';
        BlackJack.USER_TOTAL.textContent = 'Your total: ';
        BlackJack.DEALER_TOTAL.textContent = 'Dealer Total: ';
        BlackJack.START_BUTTON.style.display = 'none'; 
        BlackJack.PLAY_AGAIN_BUTTON.style.display = 'none';
        BlackJack.USER_CARDS.innerHTML = '';
        BlackJack.DEALER_CARDS.innerHTML = '';
    }

    public hit() {}

    public stay() {}

    public readonly deck = Deck.build();
    public readonly dealer = Player.build();
    public readonly user = Player.build();
}
