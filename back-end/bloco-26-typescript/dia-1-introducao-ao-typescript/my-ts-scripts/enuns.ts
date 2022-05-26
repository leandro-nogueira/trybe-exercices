import readline from 'readline-sync';

enum Meses {
  janeiro = 'jan',
  fevereiro = 'fev',
  março = 'mar',
  abril = 'abr',
  maio = 'mai',
  junho = 'jun',
  julho = 'jul',
  agosto = 'ago',
  setembro = 'set',
  outubro = 'out',
  novembro = 'nov',
  dezembro = 'dez',
};

enum Seasons {
  primavera = 'primavera',
  verão = 'verão',
  outono = 'outono',
  inverno = 'inverno',
}



const meses = Object.values(Meses);

const escolhaMes = readline.keyInSelect(meses, 'Qual mes vc quer saber?');

const seasonsSouth = {
  [Seasons.outono]: [Meses.março, Meses.abril, Meses.junho],
  [Seasons.inverno]: [Meses.junho, Meses.agosto, Meses.setembro],
  [Seasons.primavera]: [Meses.setembro, Meses.outubro, Meses.novembro, Meses.dezembro],
  [Seasons.verão]: [Meses.dezembro, Meses.janeiro, Meses.fevereiro, Meses.março],
};

const seasonsNorth = {
  [Seasons.primavera]: [Meses.março, Meses.abril, Meses.junho],
  [Seasons.verão]: [Meses.junho, Meses.agosto, Meses.setembro],
  [Seasons.outono]: [Meses.setembro, Meses.outubro, Meses.novembro, Meses.dezembro],
  [Seasons.inverno]: [Meses.dezembro, Meses.janeiro, Meses.fevereiro, Meses.março],
};

const hemispheres = {
  Norte: seasonsNorth,
  Sul: seasonsSouth,
}

const escolhaHemisferio = readline.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério!');

const month = Object.values(Meses)[escolhaMes]

const hemisphere = Object.keys(hemispheres)[escolhaHemisferio]

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);

const choseHemisfereSeasons = Object.values(hemispheres)[escolhaHemisferio];
Object.entries(choseHemisfereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(seasons);
})