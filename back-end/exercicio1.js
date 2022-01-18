function contaLouca(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num2 != 'number' || typeof num1 != 'number' || typeof num3 != 'number') reject(new Error("Informe apenas números"));

    const resultado = (num1 + num2) * 2;

    if (resultado < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(resultado)
  });

  return promise;
}

contaLouca(10, 12, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));