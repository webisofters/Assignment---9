//13. Write a TypeScript function to retrieve all the names of object's own and inherited properties.   
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// animal.ts
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.dna = Math.random();
        this.name = name;
    }
    return Animal;
}());
// bird.ts
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        _this.name = "Hector";
        return _this;
    }
    Bird.prototype.shout = function () {
        return "Cuicui!"; // sorry it is in French... I do not know how a bird shouts in English ^_^
    };
    return Bird;
}(Animal));
