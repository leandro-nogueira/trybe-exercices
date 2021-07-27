const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const teste1 = sum(4, 5);
const teste2 = sum(0, 0);
const teste3 = sum(4, '5');

assert.strictEqual(teste1, 9, '4 + 5 = 9');
assert.strictEqual(teste2, 0, '0 + 0 = 0');