export class Fraction {
    constructor(numerator, denominator = 1) {
        this._numerator = numerator;
        this._denominator = denominator;
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    get canReduce() {
        for (let i = 2; i <= this._denominator; i++) {
            if (this._numerator % i === 0 && this._denominator % i === 0) {
                return true;
            }
        }
        return false;
    }

    plus(f1) {
        if (this._denominator === f1.denominator) {
            return `${this._numerator + f1._numerator}/${this._denominator}`
        } else {
            const vice = this._numerator * f1._denominator;
            const versa = this.denominator * f1._numerator;
            return `${vice + versa}/${this._denominator * f1._denominator}`
        }
    }

    reduce() {
        for (let i = 2; i <= this._denominator; i++) {
            if (this._numerator % i === 0 && this._denominator % i === 0) {
                this._denominator = this._denominator / i;
                this._numerator = this._numerator / i;
            }
        }
        return false;
    }

    divide(f1) {
        return `${this._numerator*f1._denominator}/${f1._numerator*this._denominator}`

    }

    multiply(f1) {
        return `${this._numerator*f1._numerator}/${f1._denominator*this._denominator}`
    }


    toString() {
        return `${this._numerator}/${this._denominator}`
    }
}