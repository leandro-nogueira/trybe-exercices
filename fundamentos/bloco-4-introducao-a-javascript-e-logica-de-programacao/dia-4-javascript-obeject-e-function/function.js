function welcome(name){
   console.log('Olá ' + name + ' bem vindo ao novo mundo!')
}
welcome('Leandro')

makeGreenting('Ana', 25);

function makeGreenting(name, age){ // criação da função como nomeDafFunção(e os parametros)
  return 'E aí ' + name +' preparado pra pancadaria de estudos? oq vc não aprendeu em ' + age + ' de vida vai acontecer tudoa agora e muito rápido.';// qo realmente que a função vai executar!

let greetings = makeGreenting('Vinicius', 23) //criação dea uma variável com a função nela..
console.log(greetings) // chamou no console a variável que é a função! =]