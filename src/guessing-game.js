class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
       this.mid = Math.round((this.max - this.min)/2) + this.min;
       return Math.round((this.max - this.min)/2) + this.min;

    }

    lower() {
        return this.max = this.mid
    }

    greater() {
       return this.min = this.mid
    }
}

module.exports = GuessingGame;


