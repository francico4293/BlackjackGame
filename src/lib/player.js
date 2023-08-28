var Player = /** @class */ (function () {
    function Player() {
        this._cards = [];
        this._softTotal = 0;
        this._money = 0;
        this._hasBlackJack = false;
    }
    Player.build = function () {
        return new Player();
    };
    Object.defineProperty(Player.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "softTotal", {
        get: function () {
            return this._softTotal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "hasBlackJack", {
        get: function () {
            return this._hasBlackJack;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.addCard = function (card) {
        if (this._softTotal === 11 && card.value === 11) {
            this._softTotal += 1;
        }
        this._hasBlackJack = this._softTotal === 21;
        this._cards.push(card);
    };
    Player.prototype.depositMoney = function (amount) {
        this._money += amount;
    };
    Player.prototype.clearCards = function () {
        this._cards = [];
    };
    return Player;
}());
export { Player };
