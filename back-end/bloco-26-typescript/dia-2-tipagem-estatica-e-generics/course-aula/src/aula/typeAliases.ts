type Refeição = string;

let jantar: Refeição = 'Churrasco';

type Adress = {
  street: string,
  city: string,
  state: string,
  cep: number,
};

type Person = {
  name: string,
  smail: string,
  address: Adress,
}

let endereço: Adress = {
  street: 'rua imaculada',
  city: 'Zoora',
  cep: 2424,
  state: 'MM'
}

let jao: Person;

jao = {
  name: 'Jão',
  smail: 'lll@jj.com',
  address: endereço,
}

console.log(`${jao.name} mora em ${jao.address.city}`);
