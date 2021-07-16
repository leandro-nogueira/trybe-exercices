function createStateOptions () {
  const stateSigla = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const stateLista = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const estado = document.querySelector('#estado');
    for (let i = 0; i < stateLista.length; i += 1 ) {
      let stateName = document.createElement('option');
      stateName.value = stateSigla[i];
      stateName.innerText = stateLista[i];
      document.querySelector('#estado').appendChild(stateName);
    }
}
createStateOptions ()

// const button = document.querySelector('#enviar')
// const divPai = document.querySelector('main');
// const divConteudo = document.createElement('div')
// function printValues(event) {
//   event.preventDefault();
//   divConteudo.
//   divPai.appendChild(divConteudo);
// }
// button.addEventListener('click', printValues);

//validação

// new window.JustValidate('.your-form', {
//   Rules: {
//     email: {
//         required: true,
//         email: true
//     },
//     checkbox: {
//         required: true
//     },
//     name: {
//         required: true,
//         minLength: 3,
//         maxLength: 15
//     },
//     text: {
//         required: true,
//         maxLength: 300,
//         minLength: 5
//     },
//     password: {
//         required: true,
//         password: true,
//         minLength: 4,
//         maxLength: 8
//     },
//     zip: {
//         required: true,
//         zip: true
//     },
//     phone: {
//         phone: true
//     }
// }
// });