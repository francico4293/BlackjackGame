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
            return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
        },
        enumerable: false,
        configurable: true
    });
    return Deck;
}());
export { Deck };
