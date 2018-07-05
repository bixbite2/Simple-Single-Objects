export class PC {
    constructor(brand, resolution, USBports, system) {
        this._brand = brand;
        this._resolution = resolution;
        this._USBports = USBports;
        this._system = system;
        this.on = false;
        this.connectedPrinter = false;
        this._printerName = undefined;
    }


    get brand() {
        return this._brand;
    }

    get resolution() {
        return this._resolution;
    }

    get USBports() {
        return this._USBports;
    }

    get system() {
        return this._system;
    }

    get on() {
        return this.on;
    }

    get connectedPrinter() {
        return this.connectedPrinter;
    }

    turnOn() {
        this.on = true;
    }

    turnOff() {
        this.on = false;
    }

    connectPrinter(printerName = undefined) {
        this._printerName = printerName;
        this.connectedPrinter = true;
    }

    disconnectPrinter() {
        this._printerName = undefined;
        this.connectedPrinter = false;
    }
}