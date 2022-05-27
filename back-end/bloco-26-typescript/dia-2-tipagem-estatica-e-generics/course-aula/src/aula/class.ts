type Endereco = {
  rua: string,
  cidade: string,
  estado: string,
  cep: number,
}

interface Correspondecia {
  _endereco: Endereco

  sendLetter(dest: Pessoa): string | false
}

class Pessoa implements Correspondecia {
  _nome: string
  _email: string
  _endereco: Endereco

  constructor(nome: string, email: string, endereco: Endereco) {
    this._nome = nome
    this._email = email
    this._endereco = endereco
  }

  sayHello = (): void => {
    console.log(`Hello my name is ${this._nome}`)
  }

  sendLetter(destinatario: Pessoa): string | false {
    try {
      console.log(`Enviando carta para ${destinatario._nome}, cep ${destinatario._endereco.cep}`)
      return `${this._nome} enviou correspondência com sucesso`;
    } catch {
      return false
    }
  }
}



let paulo: Pessoa = new Pessoa('Paulo Roberto', 'hhh@ll.com', {
  rua: 'rua lá em casa',
  cidade: 'se achar',
  estado: 'VQ',
  cep: 12345,
});
let madalea: Pessoa = new Pessoa('Madalea Marria', 'hhh@ll.com', {
  rua: 'rua lá em casa',
  cidade: 'se achar',
  estado: 'VQ',
  cep: 12345,
});

madalea.sendLetter(paulo);

paulo.sayHello();
