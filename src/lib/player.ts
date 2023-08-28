import { Card } from './card'

export class Player {

    public static build() {
        return new Player();
    }

    private _cards: Card[] = [];
    private _softTotal: number = 0;
    private _money: number = 0;
    private _hasBlackJack = false;

    private constructor() {}

    public get cards() {
        return this._cards;
    }

    public get money() {
        return this._money;
    }

    public get softTotal() {
        return this._softTotal;
    }

    public get hasBlackJack() {
        return this._hasBlackJack;
    }

    public addCard(card: Card) {
        if (this._softTotal === 11 && card.value === 11) {
            this._softTotal += 1;
        }
        this._hasBlackJack = this._softTotal === 21;
        this._cards.push(card);
    }

    public depositMoney(amount: number) {
        this._money += amount;
    }

    public clearCards() {
        this._cards = [];
    }
}