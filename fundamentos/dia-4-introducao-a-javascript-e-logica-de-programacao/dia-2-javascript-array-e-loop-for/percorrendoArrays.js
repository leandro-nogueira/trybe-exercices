let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//alinhar uma nva função com os valores em ordem crescente
//tomar cuidado que o sort sozinho alinha unicode diferente.
let orderNumber = numbers.sort((a, b) => a - b);

//usar os atributos aprendidos para pegar o ultimo valor que ficou sendo o maior.
console.log(orderNumber[orderNumber.length-1]);

