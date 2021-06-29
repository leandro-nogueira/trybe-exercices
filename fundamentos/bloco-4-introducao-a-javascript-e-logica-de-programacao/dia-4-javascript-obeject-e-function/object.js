let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('bem vindo : '+info['personagem']);
// console.log('quem é vc? ');
// console.log(info.nota);

info.recorrente = 'Sim';

// console.log(info)

// for(let chave in info){
//   console.log(chave);  
// };

for(let chave in info){
  console.log(info[chave])
}
