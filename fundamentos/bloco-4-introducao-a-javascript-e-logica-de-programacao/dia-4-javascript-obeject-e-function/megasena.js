//Gerar um número aleatório
function generateRandomNumber(){
  return Math.floor(Math.random() * 60) +1;
}

//Gerar um jogo (sortear os números)
function generateGame(){
  let megasenaDraw = [];

//Precisamos sortear 6 números
for (let index = 0; index < 6; index += 1){
  //pegar número aleatório
  let randonNumber = generateRandonNumber();
  //colocar ele no array megasenaDraw
  megasenaDraw.push(randonNumber);
}
return megasenaDraw;
}




//3. Conferir quantos acertos um jogo da Mega ea teve

// Você precisa do resultado
// Você precisa do seu jogo
// Contar quantos números você acertou
function checkMegaSenaResult(result, game){
  let numberOfHits = 0;

  // Conferencia do nosso jogo
  for (let index = 0; index < result.length; index += 1){
    let drawNumber = resul[index];
    
    if (drawNumber === gameNumber){
      numberOfHits += 1;
    }
    }
  }
  return numberOfHits;
