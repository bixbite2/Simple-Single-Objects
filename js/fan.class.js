export class FAN {
    constructor(watts, brand, minRPM, maxRPM) {
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this._rpm = 0;
    }

    get watts() {
        return this._watts;
    }
    get brand() {
        return this._brand;
    }
    get minRPM() {
        return this._minRPM;
    }
    get maxRPM() {
        return this._maxRPM;
    }
    get on() {
        return this._on;
    }
    get off() {
        return this._off;
    }
    get velocity() {
        return this._velocity;
    }
    get rpm() {
        return this._rpm;
    }
    speedUp() {
        if (this._on !== true && this._off !== false) {
            this._on = true;
            this._off = false;
        }
        if (this._velocity < 3) {
            this._velocity++;
            this._rpm += 100;
        }
    }

    slowDown() {
        if (this._on == true && this._off == false) {
            if (this._velocity > 0) {
                this._velocity--;
                this._rpm -= 100;
            }
            if (this._velocity === 0) {
                this._on = false;
                this._off = true;
            }
        }
    }

    turnOff() {
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this._rpm = 0;
    }
}