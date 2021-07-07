const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.]


function changeClassTech(event){
 document.querySelector('.tech').classList.remove('tech');
 event.target.classList.add('tech');
 input.value = '';
}
firstDiv.addEventListener('click', changeClassTech);
secondDiv.addEventListener('click', changeClassTech);
thirdDiv.addEventListener('click', changeClassTech);

//input se refere a variável criada lá em cima para armazenar o elento de input.
input.addEventListener('input', function(event){ //função anônima, já como paramentro dentro do addEventListener
  let techName = document.querySelector('.tech');
  techName.innerText = event.target.value;  
});// por isso o parentese só fecha aqui em baixo, depois de declarado oq é para acontecer na função


myWebpage.addEventListener('dblclick', function(){
  window.location.replace('https://leo2903lan.github.io/'); // captura do endereçõ atual pelo e fazendo a troca por outro endereço.
});

myWebpage.addEventListener('mouseover', function(event){
event.target.style.color = 'blue';
});
myWebpage.addEventListener('mouseout', function(event){
event.target.style.color = 'unset';
});