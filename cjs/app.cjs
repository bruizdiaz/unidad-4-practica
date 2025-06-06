const { sumar, restar, multiplicar, dividir } = require('./funcionesNombradas.cjs');
const funcionesAvanzadas = require('./funcionesPorDefecto.cjs');

console.log(sumar(5, 3));
console.log(restar(5, 3));
console.log(multiplicar(5, 3));
console.log(dividir(5, 5));

console.log(funcionesAvanzadas.potencia(2, 3));
console.log(funcionesAvanzadas.porcentaje(200, 15));
