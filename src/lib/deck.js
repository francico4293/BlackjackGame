import { Card } from './card';
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [
            Card.ACE_OF_HEARTS, Card.ACE_OF_DIAMONDS, Card.ACE_OF_CLUBS, Card.ACE_OF_SPADES,
            Card.TWO_OF_HEARTS, Card.TWO_OF_DIAMONDS, Card.TWO_OF_CLUBS, Card.TWO_OF_SPADES,
            Card.THREE_OF_HEARTS, Card.THREE_OF_DIAMONDS, Card.THREE_OF_CLUBS, Card.THREE_OF_SPADES,
        ];
    }
    Deck.build = function () {
        return new Deck();
    };
    Object.defineProperty(Deck.prototype, "randomCard", {
        get: function () {
            return this.cards[Math.floor(Math.random() * this.cards.length)];
        },
        enumerable: false,
        configurable: true
    });
    return Deck;
}());
export { Deck };
