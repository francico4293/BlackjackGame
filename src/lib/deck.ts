import { Card } from './card';

export class Deck {
    public static build() {
        return new Deck();
    }

    private readonly cards = [
        Card.ACE_OF_HEARTS, Card.ACE_OF_DIAMONDS, Card.ACE_OF_CLUBS, Card.ACE_OF_SPADES,
        Card.TWO_OF_HEARTS, Card.TWO_OF_DIAMONDS, Card.TWO_OF_CLUBS, Card.TWO_OF_SPADES,
        Card.THREE_OF_HEARTS, Card.THREE_OF_DIAMONDS, Card.THREE_OF_CLUBS, Card.THREE_OF_SPADES,
    ];

    private constructor() {}

    public get randomCard() {
        return this.cards[Math.floor(Math.random() * this.cards.length)];
    }
}