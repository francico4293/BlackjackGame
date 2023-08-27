export var CardSuit;
(function (CardSuit) {
    CardSuit["HEART"] = "HEART";
    CardSuit["DIAMOND"] = "DIAMOND";
    CardSuit["SPADE"] = "SPADE";
    CardSuit["CLUB"] = "CLUB";
})(CardSuit || (CardSuit = {}));
export var CardValue;
(function (CardValue) {
    CardValue[CardValue["ACE"] = 11] = "ACE";
    CardValue[CardValue["TWO"] = 2] = "TWO";
    CardValue[CardValue["THREE"] = 3] = "THREE";
    CardValue[CardValue["FOUR"] = 4] = "FOUR";
    CardValue[CardValue["FIVE"] = 5] = "FIVE";
    CardValue[CardValue["SIX"] = 6] = "SIX";
    CardValue[CardValue["SEVEN"] = 7] = "SEVEN";
    CardValue[CardValue["EIGHT"] = 8] = "EIGHT";
    CardValue[CardValue["NINE"] = 9] = "NINE";
    CardValue[CardValue["TEN"] = 10] = "TEN";
    CardValue[CardValue["JACK"] = 10] = "JACK";
    CardValue[CardValue["QUEEN"] = 10] = "QUEEN";
    CardValue[CardValue["KING"] = 10] = "KING";
})(CardValue || (CardValue = {}));
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    Object.defineProperty(Card.prototype, "entityValue", {
        get: function () {
            if (this.suit === CardSuit.DIAMOND) {
                return '&diams;';
            }
            return "&".concat(this.suit.toLowerCase(), ";");
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.render = function () {
    };
    Card.ACE_OF_HEARTS = new Card(CardValue.ACE, CardSuit.HEART);
    Card.ACE_OF_DIAMONDS = new Card(CardValue.ACE, CardSuit.DIAMOND);
    Card.ACE_OF_CLUBS = new Card(CardValue.ACE, CardSuit.CLUB);
    Card.ACE_OF_SPADES = new Card(CardValue.ACE, CardSuit.SPADE);
    Card.TWO_OF_HEARTS = new Card(CardValue.TWO, CardSuit.HEART);
    Card.TWO_OF_DIAMONDS = new Card(CardValue.TWO, CardSuit.DIAMOND);
    Card.TWO_OF_CLUBS = new Card(CardValue.TWO, CardSuit.CLUB);
    Card.TWO_OF_SPADES = new Card(CardValue.TWO, CardSuit.SPADE);
    Card.THREE_OF_HEARTS = new Card(CardValue.THREE, CardSuit.HEART);
    Card.THREE_OF_DIAMONDS = new Card(CardValue.THREE, CardSuit.DIAMOND);
    Card.THREE_OF_CLUBS = new Card(CardValue.THREE, CardSuit.CLUB);
    Card.THREE_OF_SPADES = new Card(CardValue.THREE, CardSuit.SPADE);
    return Card;
}());
export { Card };
