import { Card } from './card'

export class Player {

    public static build() {
        return new Player();
    }

    private _cards: Card[] = [];
    private _money: number = 0;

    private constructor() {}

    public get cards() {
        return this._cards;
    }

    public addCard(card: Card) {
        this._cards.push(card);
    }

    public depositMoney(amount: number) {
        this._money += amount;
    }

    public clearCards() {
        this._cards = [];
    }

    public hasBlackJack() {

    }
}