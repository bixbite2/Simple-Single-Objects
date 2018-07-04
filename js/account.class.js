export class Conta {
    constructor(agencia, numero) {
        this._saldo = 500;
        this._agencia = agencia;
        this._numero = numero;
    }

    get saldo() {
        return this._saldo;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }

    sacar(saque) {
        if (this._saldo >= saque) {
            this._saldo -= saque;
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    depositarEmDinheiro(depositoD) {
        if (depositoD > 0 && depositoD <= 1000) {
            this._saldo += depositoD;
        } else {
            console.log('Depósito inválido.');
        }
    }

    depositarEmCheque(depositoC) {
        if (depositoC > 0 && depositoC <= 10000) {
            this._saldo += depositoC;
        } else {
            console.log('Depósito inválido.');
        }
    }

    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo.toFixed(2)}`
    }

}