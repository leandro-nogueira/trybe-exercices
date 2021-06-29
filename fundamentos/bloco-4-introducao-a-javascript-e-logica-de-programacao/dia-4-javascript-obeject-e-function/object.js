let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log("Bem-vinda, " + info.personagem)


let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube de Esquina', 'Minas'],
  bornInfo: {
    city: 'Rio de Janeiro',
    estate: 'RJ'
  }
};

console.table(singer)
console.log('o cantor ' +singer.name+ ' '+singer.lastName+' possui '+singer.age+' anos.');

singer['musicaQueMarcou'] = 'Amigo';
console.log(singer.nickName+' nasceu na cidade do :'+singer.bornInfo.city+' e está agora com :'+singer.age+' anos de pura música!')