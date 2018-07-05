import { FAN } from "./fan.class.js";
import { Conta } from "./account.class.js";
// import { ATM } from "./ATM.class.js";
import { Fraction } from "./fraction.class.js";
import { PC } from "./myobj.class.js";
console.log('main.js');

const vent = new FAN(200, 'Arno', 100, 300);
console.log(vent.watts === 200);
console.log(vent.brand === 'Arno');
console.log(vent.minRPM === 100);
console.log(vent.maxRPM === 300);

console.log(vent.on); // false
console.log(vent.on === false);
console.log(vent.off); // true
console.log(vent.off === true);
console.log(vent.velocity); // 0
console.log(vent.velocity === 0);
console.log(vent.rpm); // 0
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);

vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

//vent.on = true; should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

// vent.velocity = 1;  should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200); // mean between min and max
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);
vent.speedUp(); // should not have effect
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);

vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200);
vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);
vent.slowDown(); // should not have effect
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

const vent2 = new FAN(250, 'GE', 80, 400);
console.log(vent2.watts === 250);
console.log(vent2.brand === 'GE');
console.log(vent2.minRPM === 80);
console.log(vent2.maxRPM === 400);
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);

vent2.speedUp();
console.log(vent2.velocity === 1);
console.log(vent2.rpm === 80);
vent2.speedUp();
console.log(vent2.velocity === 2);
console.log(vent2.rpm === 240); // mean between min and max
vent2.speedUp();
console.log(vent2.velocity === 3);
console.log(vent2.rpm === 400);

vent2.turnOff();
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);

// ACCOUNT ---------------------------------------------------------------------

const minhaConta = new Conta(3300, 33345);
console.log(minhaConta.agencia === 3300);
console.log(minhaConta.numero === 33345);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 500.00');

// minhaConta.numero = 92932334;  não deve ter efeito
console.log(minhaConta.numero === 33345);

// saldo inicial de 500
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);

// não é permitido
minhaConta.sacar(600.0);
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);

// é permitido
minhaConta.sacar(60.0); // 500.0 - 60.0 === 440.0
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

// minhaConta.saldo = 1000000; não deve ter efeito:
console.log(minhaConta.saldo === 440.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 440.00');

// depósito em dinheiro não permitido
minhaConta.depositarEmDinheiro(1100.0);
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

// depósito em dinheiro permitido
minhaConta.depositarEmDinheiro(500.0); // 440.0 + 500.0 === 940.0
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque não permitido
minhaConta.depositarEmCheque(11100.0);
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque permitido
minhaConta.depositarEmCheque(5000.0); // 940.0 + 5000.0 === 5940.0
console.log(minhaConta.saldo); // 5940.0
console.log(minhaConta.saldo === 5940.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 5940.00');

// ATM -------------------------------------------------------------------------
/*
const minhaConta = new Conta(3300, 33345);
console.log(minhaConta.agencia === 3300);
console.log(minhaConta.numero === 33345);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 500.00');

minhaConta.numero = 92932334; // não deve ter efeito
console.log(minhaConta.numero === 33345);

// saldo inicial de 500
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);

// não é permitido
minhaConta.sacar(600.0);
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);

// é permitido
minhaConta.sacar(60.0); // 500.0 - 60.0 === 440.0
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

minhaConta.saldo = 1000000; // não deve ter efeito:
console.log(minhaConta.saldo === 440.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 440.00');

// depósito em dinheiro não permitido
minhaConta.depositarEmDinheiro(1100.0);
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

// depósito em dinheiro permitido
minhaConta.depositarEmDinheiro(500.0); // 440.0 + 500.0 === 940.0
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque não permitido
minhaConta.depositarEmCheque(11100.0);
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque permitido
minhaConta.depositarEmCheque(5000.0); // 940.0 + 5000.0 === 5940.0
console.log(minhaConta.saldo); // 5940.0
console.log(minhaConta.saldo === 5940.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 5940.00');
*/

// Fraction(numerator, denominator)---------------------------------------------

const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
// fr.numerator = 10;
// fr.denominator = 10;
// -----------------------

const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');

const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
const fun1 = new Fraction(3, 5);
console.log(fun1.toString() === '3/5');

const fun2 = new Fraction(1, 6);
console.log(fun2.toString() === '1/6');

const fun3 = fun1.plus(fun2);

console.log(fun3 === '23/30');

const fun4 = new Fraction(12, 7);
console.log(fun4.toString() === '12/7');

const fun5 = new Fraction(3, 9);
console.log(fun5.toString() === '3/9');

const fun6 = fun4.plus(fun5);

console.log(fun6 === '129/63');

const fun7 = new Fraction(1235123412, 7123145);
console.log(fun7.toString() === '1235123412/7123145');

const fun8 = new Fraction(152351235556, 12315);
console.log(fun8.toString() === '152351235556/12315');

const fun9 = fun7.plus(fun8);

console.log(fun9 === '1085235152339362400/87721530675');

const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);

f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce

const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);

const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide

const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply

const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f15.lessThan(f16));
console.log(f15.lessThan(f14));
console.log(f15.greaterThan(f14));
console.log(f14.greaterThan(f14));
console.log(f14.equals(f15));
console.log(f14.greaterThan(f15));
console.log(f15.lessThan(f14));
console.log(f15.equals(f16));
console.log(f14.equals(f14));

const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '4/1');

const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === '0/1');