const imc = require('./imc');

const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Digite seu peso: ');
const altura = readlineSync.questionFloat('Digite sua altura: ');

console.log(typeof peso)
console.log(typeof altura)



console.log('Seu índice de massa corporal é: ' + imc(peso, altura).toFixed(2));

console.log(typeof imc);