const imc = require('./imc');

let readlineSync = require('readline-sync');

const peso = readlineSync.question('Digite seu peso');
const altura = readlineSync.question('Digite sua altura');


console.log(imc(peso, altura));
