export enum CardSuit {
    HEART = 'HEART',
    DIAMOND = 'DIAMOND',
    SPADE = 'SPADE',
    CLUB = 'CLUB',
}

export enum CardValue {
    ACE = 11,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 10,
    QUEEN = 10,
    KING = 10,
}

export class Card {
    public static ACE_OF_HEARTS = new Card(CardValue.ACE, CardSuit.HEART);

    public static ACE_OF_DIAMONDS = new Card(CardValue.ACE, CardSuit.DIAMOND);

    public static ACE_OF_CLUBS = new Card(CardValue.ACE, CardSuit.CLUB);

    public static ACE_OF_SPADES = new Card(CardValue.ACE, CardSuit.SPADE);

    public static TWO_OF_HEARTS = new Card(CardValue.TWO, CardSuit.HEART);

    public static TWO_OF_DIAMONDS = new Card(CardValue.TWO, CardSuit.DIAMOND);

    public static TWO_OF_CLUBS = new Card(CardValue.TWO, CardSuit.CLUB);

    public static TWO_OF_SPADES = new Card(CardValue.TWO, CardSuit.SPADE);

    public static THREE_OF_HEARTS = new Card(CardValue.THREE, CardSuit.HEART);

    public static THREE_OF_DIAMONDS = new Card(CardValue.THREE, CardSuit.DIAMOND);

    public static THREE_OF_CLUBS = new Card(CardValue.THREE, CardSuit.CLUB);

    public static THREE_OF_SPADES = new Card(CardValue.THREE, CardSuit.SPADE);

    private constructor(public readonly value: CardValue, public readonly suit: CardSuit) {}

    public get entityValue () {
        if (this.suit === CardSuit.DIAMOND) {
            return '&diams;';
        }
        return `&${this.suit.toLowerCase()};`;
    }

    public render() {

    }
}