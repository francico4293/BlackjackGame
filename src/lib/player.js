var Player = /** @class */ (function () {
    function Player() {
        this._cards = [];
        this._money = 0;
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
    Player.prototype.addCard = function (card) {
        this._cards.push(card);
    };
    Player.prototype.depositMoney = function (amount) {
        this._money += amount;
    };
    Player.prototype.clearCards = function () {
        this._cards = [];
    };
    Player.prototype.hasBlackJack = function () {
    };
    return Player;
}());
export { Player };
