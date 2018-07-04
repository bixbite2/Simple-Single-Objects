export class ATM {
    constructor(numeroSerie) {
        this._numeroSerie = numeroSerie;
        this._valor = 0;
    }

    get numeroSerie() {
        return this._numeroSerie;
    }

    get valor() {
        return this._valor;
    }

    abastecer(quantidade, valor) {
        this._valor += quantidade * valor;
    }
}

/*

// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor

*/