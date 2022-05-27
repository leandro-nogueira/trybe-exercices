let stateTypeUnion: 'PR' | 'SC' | 'RS';

stateTypeUnion = 'PR';

enum StateEnum {
  PR='Paraná',
  SC='Santa Catarina',
  RS='Rio Grande do Sul',
}

function carta(uf: StateEnum) {
  console.log(`Enviando carta para ${uf}`);
}

carta(StateEnum.RS);