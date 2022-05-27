const numeros = [1,2,3,4,5];
const person = ['leandro', 'leo', 'luiz'];
const random = [true, false];

function getRandomElement<T>(items:T[]): T {
  const item = Math.floor(Math.random() * items.length);

  return items[item]
}

console.log(getRandomElement<number>(numeros));